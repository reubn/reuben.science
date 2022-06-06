export default bashExtra
bashExtra.displayName = 'bashExtra'
bashExtra.aliases = []

function bashExtra(Prism) {
  (function (Prism) {
	// $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
	// + LC_ALL, RANDOM, REPLY, SECONDS.
	// + make sure PS1..4 are here as they are not always set,
	// - some useless things.
	var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';

	var commandAfterHeredoc = {
		pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
		lookbehind: true,
		alias: 'punctuation', // this looks reasonably well in all themes
		inside: null // see below
	};

	var insideString = {
		'bash': commandAfterHeredoc,
		'environment': {
			pattern: RegExp('\\$' + envVars),
			alias: 'constant'
		},
		'variable': [
			// [0]: Arithmetic Environment
			{
				pattern: /\$?\(\([\s\S]+?\)\)/,
				greedy: true,
				inside: {
          'variable-symbols': /(^\$\(\()|(\)\)$)/,
					// If there is a $ sign at the beginning highlight $(( and )) as variable
					'variable': [
						{
							pattern: /(^\$\(\([\s\S]+)\)\)/,
							lookbehind: true
						},
						/^\$\(\(/
					],
					'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
					// Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
					'operator': /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
					// If there is no $ sign at the beginning highlight (( and )) as punctuation
					'punctuation': /\(\(?|\)\)?|,|;/
				}
			},
			// [1]: Command Substitution
			{
				pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
				greedy: true,
				inside: {
          'variable-symbols': /(^\$\()|(\)$)/,
					'variable': /^\$\(|^`|\)$|`$/
				}
			},
			// [2]: Brace expansion
			{
				pattern: /\$\{[^}]+\}/,
				greedy: true,
				inside: {
          'variable-symbols': /(^\$\{\w*)|(\}$)/,
					'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
					'punctuation': /[\[\]]/,
					'environment': {
						pattern: RegExp('(\\{)' + envVars),
						lookbehind: true,
						alias: 'constant'
					}
				}
			},
      {
    		pattern: /\$(?:\w+|[#?*!@$])/,
    		alias: 'simple'
    	}
		],
		// Escape sequences from echo and printf's manuals, and escaped quotes.
		'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
	};

	Prism.languages.bash = {
		'shebang': {
			pattern: /^#!\s*\/.*/,
			alias: 'important'
		},
		'comment': {
			pattern: /(^|[^"{\\$])#.*/,
			lookbehind: true
		},
		'function-name': [
			// a) function foo {
			// b) foo() {
			// c) function foo() {
			// but not “foo {”
			{
				// a) and c)
				pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
				lookbehind: true,
				alias: 'function'
			},
			{
				// b)
				pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
				alias: 'function'
			}
		],
		// Highlight variable names as variables in for and select beginnings.
		'for-or-select': {
			pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
			alias: 'variable',
			lookbehind: true
		},
		// Highlight variable names as variables in the left-hand part
		// of assignments (“=” and “+=”).
		'assign-left': {
			pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
			inside: {
				'environment': {
					pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
					lookbehind: true,
					alias: 'constant'
				}
			},
			alias: 'variable',
			lookbehind: true
		},
		'string': [
			// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
			{
				pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			// Here-document with quotes around the tag
			// → No expansion (so no “inside”).
			{
				pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
				lookbehind: true,
				greedy: true,
				inside: {
					'bash': commandAfterHeredoc
				}
			},
			// “Normal” string
			{
				// https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
				pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$(?!\()|`[^`]+`|[^"\\`$|\n])*"/,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			{
				// https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
				pattern: /(^|[^$\\])'[^'\n]*'/,
				lookbehind: true,
				greedy: true
			},
			{
				// https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
				pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
				greedy: true,
				inside: {
					'entity': insideString.entity
				}
			}
		],
		'environment': {
			pattern: RegExp('\\$?' + envVars),
			alias: 'constant'
		},
    'argument': {
      pattern: /\s-[^\s\n]+/
    },
		'variable': insideString.variable,
		'function': {
			pattern: /(^|[\s;|&]|[<>]\()(?:accessdb|aconnect|add|addgnupghome|addgroup|addpart|addr2line|adduser|agetty|alsabat|alsactl|alsaloop|alsamixer|alsatplg|alsaucm|amidi|amixer|aplay|aplaymidi|applygnupgdefaults|apropos|apt|aptitude|ar|arch|arecord|arecordmidi|arp|arpd|arptables|as|aseqdump|aseqnet|aspell|automysqlbackup|awk|axfer|b2sum|badblocks|base32|base64|basename|bash|bashbug|bc|bccmd|bconsole|bdaddr|bg|blkdeactivate|blkdiscard|blkid|blkmapd|blkzone|blockdev|bluemoon|bluetoothctl|bluetoothd|bootctl|bridge|btattach|bthelper|btmgmt|btmon|btuart|bunzip2|busctl|busybox|bzcat|bzcmp|bzdiff|bzegrep|bzexe|bzfgrep|bzgrep|bzip2|bzip2recover|bzless|bzmore|c89|c99|cal|calendar|capsh|captoinfo|cat|catchsegv|catman|cc|cfdisk|chage|chardet3|chardetect3|chattr|chcon|chcpu|chfn|chgpasswd|chgrp|chkconfig|chmem|chmod|choom|chown|chpasswd|chroot|chrt|chsh|chvt|cifscreds|ciptool|ckbcomp|cksum|clear|cmp|codepage|codesign|col|colcrt|colrm|column|comm|compgen|complete|compopt|compose|composer|con2fbmap|containerd|corelist|cp|cpan|cpgr|cpio|cpp|cppw|crda|cron|crontab|csplit|ctr|ctrlaltdel|ctstat|curl|cut|cvtsudoers|cwebp|dash|date|dc|dd|ddrescue|deallocvt|debconf|debootstrap|debugfs|delgroup|delpart|deluser|delv|depmod|dequote|devlink|df|dhclient|dhcpcd|dhcpcd5|diff|diff3|dig|dir|dircolors|dirmngr|dirname|dirs|disown|dkms|dmesg|dmidecode|dmsetup|dmstats|dnsdomainname|dns-sd|docker|dockerd|domainname|dosfsck|dosfslabel|dpkg|dtc|dtdiff|dtmerge|dtoverlay|dtparam|du|dumpe2fs|dumpkeys|dwp|e2freefrag|e2fsck|e2image|e2label|e2mmpstatus|e2undo|e4crypt|e4defrag|ebtables|ed|edidparser|edit|editor|egrep|eject|elfedit|enc2xs|encguess|env|envsubst|eqn|ethtool|ex|expand|expect|expiry|expr|factor|faillog|fakeroot|fallocate|fatlabel|fbset|fc|fdformat|fdisk|fdtdump|fdtget|fdtoverlay|fdtput|ffmpeg|fg|fgconsole|fgrep|file|filefrag|fincore|find|findfs|findmnt|flashrom|flock|fmt|fold|format|free|from|fsck|fsfreeze|fstrim|ftp|funzip|fuser|games|gatttool|gawk|gcc|gcore|gcov|gdb|gdbtui|gencat|genl|geqn|getcap|getcifsacl|getconf|getent|getkeycodes|getopt|getpcaps|gettext|getty|git|gold|gparted|gpasswd|gpg|gpgcompose|gpgconf|gpgparsemail|gpgsm|gpgsplit|gpgtar|gpgv|gpic|gprof|grep|groff|grog|grops|grotty|groupadd|groupdel|groupmems|groupmod|groups|grpck|grpconv|grpunconv|gtbl|gunzip|gzexe|gzip|h2ph|h2xs|halt|hardlink|hciattach|hciconfig|hcitool|hd|head|helpztags|hex2hcd|hexdump|hg|history|host|hostid|hostname|hostnamectl|htop|hwclock|iconv|iconvconfig|id|iecset|ifconfig|ifdown|ifquery|ifup|import|info|infobrowser|infocmp|infotocap|init|insmod|install|installkernel|instmodsh|ionice|ip|ip6tables|ipcmk|ipcrm|ipcs|iperf3|ipmaddr|iptables|iptunnel|ischroot|isosize|iw|iwconfig|iwevent|iwgetid|iwlist|iwpriv|iwspy|jobs|join|journalctl|jq|jsonschema|kbdinfo|kbdrate|kbxutil|keyctl|keyring|kill|killall|killall5|kmod|l2ping|l2test|last|lastb|lastlog|lcf|ld|ldattach|ldconfig|ldd|less|lessecho|lessfile|lesskey|lesspipe|lexgrog|lft|libnetcfg|link|linux32|linux64|ln|lnstat|loadkeys|loadunimap|locale|localectl|localedef|locate|logger|login|loginctl|logname|logrotate|logsave|look|lorder|losetup|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsattr|lsblk|lscpu|lsinitramfs|lsipc|lslocks|lslogins|lsmem|lsmod|lsns|lsof|lspci|lspgpot|lsusb|lua|luac|luajit|lynx|lzcat|lzcmp|lzdiff|lzegrep|lzfgrep|lzgrep|lzless|lzma|lzmainfo|lzmore|make|man|mandb|manpath|mapscrn|mawk|mc|mcookie|md5sum|mdadm|mdig|mesg|mkconfig|mkdir|mkdosfs|mke2fs|mkfifo|mkfs|mkinitramfs|mkisofs|mknod|mkswap|mktemp|mmv|modeline2fb|modinfo|modprobe|montage|more|most|mount|mountpoint|mountstats|mt|mtools|mtr|mtrace|mutt|mv|namei|nameif|nano|nawk|nc|ncal|ncdu|neqn|netcat|netmask|netstat|networkctl|newgrp|newusers|nfsidmap|nfsiostat|nfsstat|ngettext|nice|nisdomainname|nl|nm|nmap|node|nohup|nologin|nping|npm|nproc|npx|nroff|nsenter|nslookup|nstat|nsupdate|numfmt|nvm|obexctl|objcopy|objdump|od|op|open|openssl|openvt|pager|parted|partprobe|partx|passwd|paste|patch|pathchk|paxctld|pcimodules|pdb|pdb2|pdb3|peekfd|perf|perl|perlbug|perldoc|perlivp|perlthanks|pgrep|pic|pico|piconv|pidof|pigz|pinentry|ping|ping4|ping6|pinky|pip3|pkaction|pkcheck|pkexec|pkill|pkttyagent|pl2pm|pldd|plipconfig|pmap|pngfix|pnpm|pod2html|pod2man|pod2text|pod2usage|podchecker|podselect|popd|poweroff|pr|preconv|print|printcap|printenv|printerbanner|prlimit|prove|prtstat|ps|psfaddtable|psfgettable|psfstriptable|psfxtable|pslog|pstree|ptar|ptardiff|ptargrep|ptx|pushd|pv|pwck|pwconv|pwdx|pwunconv|py3clean|py3compile|py3versions|pybuild|pyclean|pycompile|pydoc|pydoc2|pydoc3|pygettext|pygettext2|pygettext3|python|python2|python3|python3m|pyversions|qrencode|quota|quotacheck|quotactl|quote|ram|ranlib|rar|rarp|raspistill|raspivid|raspividyuv|raspiyuv|raw|rbash|rcp|rctest|rdma|readelf|readlink|readprofile|realpath|reboot|red|regdbdump|remsync|rename|renice|reset|resize2fs|resizepart|resolvconf|resolvectl|rev|rfcomm|rfkill|rgrep|rlogin|rm|rmdir|rmmod|rmt|rnano|rngd|rngtest|route|routef|routel|rpcbind|rpcdebug|rpcgen|rpcinfo|rpm|rsh|rsync|rsyslogd|rtacct|rtcwake|rtmon|rtstat|runc|runcon|runlevel|runuser|rview|savelog|scp|screen|screendump|script|scriptreplay|sdiff|sdptool|security|sed|see|sendmail|seq|service|setarch|setcap|setcifsacl|setfont|setkeycodes|setleds|setlogcons|setmetamode|setpci|setpriv|setsid|setterm|setupcon|setvesablank|setvtrgb|sfdisk|sftp|sg|sh|sha1sum|sha224sum|sha256sum|sha384sum|sha512sum|shadowconfig|shasum|shellcheck|showconsolefont|showkey|showmount|shred|shuf|shutdown|size|skill|slabtop|slattach|sleep|slocate|slogin|snice|soelim|sort|sotruss|splain|split|splitfont|sprof|ss|ssh|sshd|stat|stdbuf|strace|strings|strip|stty|sudoedit|sudoreplay|sulogin|sum|suspend|swaplabel|swapoff|swapon|symcryptrun|sync|sysctl|systemctl|systemd|tabs|tac|tail|tar|tarcat|tasksel|taskset|tbl|tc|tcpdump|tcptraceroute|tee|telinit|tempfile|thd|tic|timedatectl|timeout|tipc|tload|toe|top|touch|tput|tr|traceproto|traceroute|traceroute6|troff|true|truncate|tset|tsort|tty|tune2fs|tvservice|tzconfig|tzselect|ucf|ucfq|ucfr|udevadm|ul|umount|uname|uncompress|unexpand|uniq|units|unlink|unlzma|unmkinitramfs|unpigz|unrar|unshar|unshare|unxz|unzip|unzipsfx|uptime|usbreset|useradd|userdel|usermod|users|utmpdump|uudecode|uuencode|v|validlocale|vcdbg|vcgencmd|vcstime|vdir|vi|view|vigr|vim|vipw|virsh|visudo|vmstat|w|wait|wall|watch|watchgnupg|wc|wdctl|wg|wget|whatis|whereis|which|whiptail|who|whoami|wipefs|write|xargs|xattr|xauth|xsubpp|xxd|xz|xzcat|xzcmp|xzdiff|xzegrep|xzfgrep|xzgrep|xzless|xzmore|yarn|yes|ypdomainname|zcat|zcmp|zdiff|zdump|zegrep|zenity|zfgrep|zforce|zgrep|zic|zip|zipdetails|zipgrep|zipinfo|zless|zmore|znew|zramctl|zsh|zypper)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		'keyword': {
			pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		// https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
		'builtin': {
			pattern: /(^|[\s;|&]|[<>]\()(?:su|sudo|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
			lookbehind: true,
			// Alias added to make those easier to distinguish from strings.
			alias: 'class-name'
		},
		'boolean': {
			pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		'file-descriptor': {
			pattern: /\B&\d\b/,
			alias: 'important'
		},
		'operator': {
			// Lots of redirections here, but not just that.
			pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
			inside: {
				'file-descriptor': {
					pattern: /^\d/,
					alias: 'important'
				}
			}
		},
		'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
		'number': {
			pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
			lookbehind: true
		}
	};

	commandAfterHeredoc.inside = Prism.languages.bash;

	/* Patterns in command substitution. */
	var toBeCopied = Object.keys(Prism.languages.bash).filter(k => k != "variable");
	var inside = insideString.variable[1].inside;
	for (var i = 0; i < toBeCopied.length; i++) {
		inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
	}

	Prism.languages.shell = Prism.languages.bash;
}(Prism));
}
