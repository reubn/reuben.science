(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[726],{65107:function(e,t,n){var s={"./cloudflare-ddns/index.mdx":[57960,960],"./docker-host/index.mdx":[72126,126],"./journalctl-coloured/index.mdx":[1723,723],"./mac-addr-default-gateway/index.mdx":[37981,981],"./macos-damaged/index.mdx":[44821,821],"./macos-image-sd/index.mdx":[97628,628],"./macos-install-trusted-cert/index.mdx":[87844,844],"./macos-mdns/index.mdx":[40344,344],"./ssh-copy-files/index.mdx":[3742,742],"./tcx-laps-to-geojson/index.mdx":[69943,943]};function a(e){if(!n.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(s)},a.id=65107,e.exports=a},73877:function(e,t,n){var s={"./cloudflare-ddns/index.mdx":57960,"./docker-host/index.mdx":72126,"./journalctl-coloured/index.mdx":1723,"./mac-addr-default-gateway/index.mdx":37981,"./macos-damaged/index.mdx":44821,"./macos-image-sd/index.mdx":97628,"./macos-install-trusted-cert/index.mdx":87844,"./macos-mdns/index.mdx":40344,"./ssh-copy-files/index.mdx":3742,"./tcx-laps-to-geojson/index.mdx":69943};function a(e){var t=r(e);if(!n.m[t]){var s=new Error("Module '"+e+"' ('"+t+"') is not available (weak dependency)");throw s.code="MODULE_NOT_FOUND",s}return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,a.id=73877,e.exports=a},60247:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return g},processPost:function(){return m}});var s=n(85893),a=n(96156),r=n(5152),o=n(2962),i=n(23711);function l(e){var t=e.slug,n=e.metadata,a=e.children,r=e.__HACK_ID,l=new Date(n.date);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.PB,{title:n.title,description:n.description,openGraph:{title:n.title,description:n.description,site_name:"reuben.science",type:"article",article:{publishedTime:l.toISOString(),authors:["Reuben"]}}}),(0,s.jsx)(o.gR,{itemListElements:[{position:1,name:"Home",item:"https://".concat("reuben.science","/")},{position:2,name:"Snippets",item:"https://".concat("reuben.science","/snippets")},{position:3,name:n.title,item:"https://".concat("reuben.science","/snippets/").concat(t)}]}),(0,s.jsx)(o.dX,{title:n.title,datePublished:l.toISOString(),authorName:["Reuben"],publisherName:"Reuben",description:n.description}),(0,s.jsxs)("article",{className:i.post,children:[(0,s.jsx)("h1",{className:i.title,children:n.title}),(0,s.jsxs)("span",{className:i.info,children:[(0,s.jsx)("span",{children:l.toLocaleDateString()}),(0,s.jsxs)("span",{children:[n.linesOfCode||"???"," line",1!=n.linesOfCode&&"s"]})]}),(0,s.jsx)("span",{className:i.body,id:r,children:a})]})]})}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=JSON.parse('["cloudflare-ddns","docker-host","journalctl-coloured","mac-addr-default-gateway","macos-damaged","macos-image-sd","macos-install-trusted-cert","macos-mdns","ssh-copy-files","tcx-laps-to-geojson"]').reduce((function(e,t){return p(p({},e),{},(0,a.Z)({},t,(0,r.default)((function(){return n(65107)("./".concat(t,"/index.mdx"))}),{loading:function(){return window.__HACK_GLOBAL?(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:window.__HACK_GLOBAL[t]||""}}):null},loadableGenerated:{webpack:function(){return[n(73877).resolve("./".concat(t,"/index.mdx"))]},modules:["snippets/[slug].js -> "+"@/content/snippets/".concat(t,"/index.mdx")]}})))}),{}),u=!0,m=function(e){e.slug;var t=e.metadata,s=e.content,a=n(98695),r=n(773);return n(71109)(a),p(p({},t),{},{date:new Date(t.date).toISOString(),linesOfCode:Math.max(0,(s.match(/<pre[^]*?<\/pre>/gm)||[]).join("").split("\n").length-1)||null,preview:{language:t.preview.language,html:r(a.highlight(t.preview.content,t.preview.language))}})};function g(e){var t=e.slug,n=e.metadata,a=d[t],r="HACK-SNIPPET-".concat(t);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{slug:t,metadata:n,__HACK_ID:r,children:(0,s.jsx)(a,{})}),null]})}},604:function(e){"use strict";function t(e){!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{"variable-symbols":/(^\$\(\()|(\)\)$)/,variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{"variable-symbols":/(^\$\()|(\)$)/,variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{"variable-symbols":/(^\$\{\w*)|(\}$)/,operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},{pattern:/\$(?:\w+|[#?*!@$])/,alias:"simple"}],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$(?!\()|`[^`]+`|[^"\\`$|\n])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^'\n]*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},argument:{pattern:/\s-[^\s\n]+/},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:accessdb|aconnect|add|addgnupghome|addgroup|addpart|addr2line|adduser|agetty|alsabat|alsactl|alsaloop|alsamixer|alsatplg|alsaucm|amidi|amixer|aplay|aplaymidi|applygnupgdefaults|apropos|apt|aptitude|ar|arch|arecord|arecordmidi|arp|arpd|arptables|as|aseqdump|aseqnet|aspell|automysqlbackup|awk|axfer|b2sum|badblocks|base32|base64|basename|bash|bashbug|bc|bccmd|bconsole|bdaddr|bg|blkdeactivate|blkdiscard|blkid|blkmapd|blkzone|blockdev|bluemoon|bluetoothctl|bluetoothd|bootctl|bridge|btattach|bthelper|btmgmt|btmon|btuart|bunzip2|busctl|busybox|bzcat|bzcmp|bzdiff|bzegrep|bzexe|bzfgrep|bzgrep|bzip2|bzip2recover|bzless|bzmore|c89|c99|cal|calendar|capsh|captoinfo|cat|catchsegv|catman|cc|cfdisk|chage|chardet3|chardetect3|chattr|chcon|chcpu|chfn|chgpasswd|chgrp|chkconfig|chmem|chmod|choom|chown|chpasswd|chroot|chrt|chsh|chvt|cifscreds|ciptool|ckbcomp|cksum|clear|cmp|codepage|codesign|col|colcrt|colrm|column|comm|compgen|complete|compopt|compose|composer|con2fbmap|containerd|corelist|cp|cpan|cpgr|cpio|cpp|cppw|crda|cron|crontab|csplit|ctr|ctrlaltdel|ctstat|curl|cut|cvtsudoers|cwebp|dash|date|dc|dd|ddrescue|deallocvt|debconf|debootstrap|debugfs|delgroup|delpart|deluser|delv|depmod|dequote|devlink|df|dhclient|dhcpcd|dhcpcd5|diff|diff3|dig|dir|dircolors|dirmngr|dirname|dirs|disown|dkms|dmesg|dmidecode|dmsetup|dmstats|dnsdomainname|dns-sd|docker|dockerd|domainname|dosfsck|dosfslabel|dpkg|dtc|dtdiff|dtmerge|dtoverlay|dtparam|du|dumpe2fs|dumpkeys|dwp|e2freefrag|e2fsck|e2image|e2label|e2mmpstatus|e2undo|e4crypt|e4defrag|ebtables|ed|edidparser|edit|editor|egrep|eject|elfedit|enc2xs|encguess|env|envsubst|eqn|ethtool|ex|expand|expect|expiry|expr|factor|faillog|fakeroot|fallocate|fatlabel|fbset|fc|fdformat|fdisk|fdtdump|fdtget|fdtoverlay|fdtput|ffmpeg|fg|fgconsole|fgrep|file|filefrag|fincore|find|findfs|findmnt|flashrom|flock|fmt|fold|format|free|from|fsck|fsfreeze|fstrim|ftp|funzip|fuser|games|gatttool|gawk|gcc|gcore|gcov|gdb|gdbtui|gencat|genl|geqn|getcap|getcifsacl|getconf|getent|getkeycodes|getopt|getpcaps|gettext|getty|git|gold|gparted|gpasswd|gpg|gpgcompose|gpgconf|gpgparsemail|gpgsm|gpgsplit|gpgtar|gpgv|gpic|gprof|grep|groff|grog|grops|grotty|groupadd|groupdel|groupmems|groupmod|groups|grpck|grpconv|grpunconv|gtbl|gunzip|gzexe|gzip|h2ph|h2xs|halt|hardlink|hciattach|hciconfig|hcitool|hd|head|helpztags|hex2hcd|hexdump|hg|history|host|hostid|hostname|hostnamectl|htop|hwclock|iconv|iconvconfig|id|iecset|ifconfig|ifdown|ifquery|ifup|import|info|infobrowser|infocmp|infotocap|init|insmod|install|installkernel|instmodsh|ionice|ip|ip6tables|ipcmk|ipcrm|ipcs|iperf3|ipmaddr|iptables|iptunnel|ischroot|isosize|iw|iwconfig|iwevent|iwgetid|iwlist|iwpriv|iwspy|jobs|join|journalctl|jq|jsonschema|kbdinfo|kbdrate|kbxutil|keyctl|keyring|kill|killall|killall5|kmod|l2ping|l2test|last|lastb|lastlog|lcf|ld|ldattach|ldconfig|ldd|less|lessecho|lessfile|lesskey|lesspipe|lexgrog|lft|libnetcfg|link|linux32|linux64|ln|lnstat|loadkeys|loadunimap|locale|localectl|localedef|locate|logger|login|loginctl|logname|logrotate|logsave|look|lorder|losetup|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsattr|lsblk|lscpu|lsinitramfs|lsipc|lslocks|lslogins|lsmem|lsmod|lsns|lsof|lspci|lspgpot|lsusb|lua|luac|luajit|lynx|lzcat|lzcmp|lzdiff|lzegrep|lzfgrep|lzgrep|lzless|lzma|lzmainfo|lzmore|make|man|mandb|manpath|mapscrn|mawk|mc|mcookie|md5sum|mdadm|mdig|mesg|mkconfig|mkdir|mkdosfs|mke2fs|mkfifo|mkfs|mkinitramfs|mkisofs|mknod|mkswap|mktemp|mmv|modeline2fb|modinfo|modprobe|montage|more|most|mount|mountpoint|mountstats|mt|mtools|mtr|mtrace|mutt|mv|namei|nameif|nano|nawk|nc|ncal|ncdu|neqn|netcat|netmask|netstat|networkctl|newgrp|newusers|nfsidmap|nfsiostat|nfsstat|ngettext|nice|nisdomainname|nl|nm|nmap|node|nohup|nologin|nping|npm|nproc|npx|nroff|nsenter|nslookup|nstat|nsupdate|numfmt|nvm|obexctl|objcopy|objdump|od|op|open|openssl|openvt|pager|parted|partprobe|partx|passwd|paste|patch|pathchk|paxctld|pcimodules|pdb|pdb2|pdb3|peekfd|perf|perl|perlbug|perldoc|perlivp|perlthanks|pgrep|pic|pico|piconv|pidof|pigz|pinentry|ping|ping4|ping6|pinky|pip3|pkaction|pkcheck|pkexec|pkill|pkttyagent|pl2pm|pldd|plipconfig|pmap|pngfix|pnpm|pod2html|pod2man|pod2text|pod2usage|podchecker|podselect|popd|poweroff|pr|preconv|print|printcap|printenv|printerbanner|prlimit|prove|prtstat|ps|psfaddtable|psfgettable|psfstriptable|psfxtable|pslog|pstree|ptar|ptardiff|ptargrep|ptx|pushd|pv|pwck|pwconv|pwdx|pwunconv|py3clean|py3compile|py3versions|pybuild|pyclean|pycompile|pydoc|pydoc2|pydoc3|pygettext|pygettext2|pygettext3|python|python2|python3|python3m|pyversions|qrencode|quota|quotacheck|quotactl|quote|ram|ranlib|rar|rarp|raspistill|raspivid|raspividyuv|raspiyuv|raw|rbash|rcp|rctest|rdma|readelf|readlink|readprofile|realpath|reboot|red|regdbdump|remsync|rename|renice|reset|resize2fs|resizepart|resolvconf|resolvectl|rev|rfcomm|rfkill|rgrep|rlogin|rm|rmdir|rmmod|rmt|rnano|rngd|rngtest|route|routef|routel|rpcbind|rpcdebug|rpcgen|rpcinfo|rpm|rsh|rsync|rsyslogd|rtacct|rtcwake|rtmon|rtstat|runc|runcon|runlevel|runuser|rview|savelog|scp|screen|screendump|script|scriptreplay|sdiff|sdptool|security|sed|see|sendmail|seq|service|setarch|setcap|setcifsacl|setfont|setkeycodes|setleds|setlogcons|setmetamode|setpci|setpriv|setsid|setterm|setupcon|setvesablank|setvtrgb|sfdisk|sftp|sg|sh|sha1sum|sha224sum|sha256sum|sha384sum|sha512sum|shadowconfig|shasum|shellcheck|showconsolefont|showkey|showmount|shred|shuf|shutdown|size|skill|slabtop|slattach|sleep|slocate|slogin|snice|soelim|sort|sotruss|splain|split|splitfont|sprof|ss|ssh|sshd|stat|stdbuf|strace|strings|strip|stty|sudoedit|sudoreplay|sulogin|sum|suspend|swaplabel|swapoff|swapon|symcryptrun|sync|sysctl|systemctl|systemd|tabs|tac|tail|tar|tarcat|tasksel|taskset|tbl|tc|tcpdump|tcptraceroute|tee|telinit|tempfile|thd|tic|timedatectl|timeout|tipc|tload|toe|top|touch|tput|tr|traceproto|traceroute|traceroute6|troff|true|truncate|tset|tsort|tty|tune2fs|tvservice|tzconfig|tzselect|ucf|ucfq|ucfr|udevadm|ul|umount|uname|uncompress|unexpand|uniq|units|unlink|unlzma|unmkinitramfs|unpigz|unrar|unshar|unshare|unxz|unzip|unzipsfx|uptime|usbreset|useradd|userdel|usermod|users|utmpdump|uudecode|uuencode|v|validlocale|vcdbg|vcgencmd|vcstime|vdir|vi|view|vigr|vim|vipw|virsh|visudo|vmstat|w|wait|wall|watch|watchgnupg|wc|wdctl|wg|wget|whatis|whereis|which|whiptail|who|whoami|wipefs|write|xargs|xattr|xauth|xsubpp|xxd|xz|xzcat|xzcmp|xzdiff|xzegrep|xzfgrep|xzgrep|xzless|xzmore|yarn|yes|ypdomainname|zcat|zcmp|zdiff|zdump|zegrep|zenity|zfgrep|zforce|zgrep|zic|zip|zipdetails|zipgrep|zipinfo|zless|zmore|znew|zramctl|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:su|sudo|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var a=Object.keys(e.languages.bash).filter((function(e){return"variable"!=e})),r=s.variable[1].inside,o=0;o<a.length;o++)r[a[o]]=e.languages.bash[a[o]];e.languages.shell=e.languages.bash}(e)}e.exports=t,t.displayName="bashExtras",t.aliases=[]},71109:function(e,t,n){var s=[n(604),n(23840),n(41114)];e.exports=function(e){return s.forEach((function(t){return e.register(t)}))}},41114:function(e,t,n){"use strict";var s=n(59713);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){var t=e.languages.json;e.languages.json=r(r({},t),{},{property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0,inside:{quote:/(^")|("$)/}},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0,inside:{quote:/(^")|("$)/}},boolean:{pattern:/\b(?:true|false)\b/,inside:{booleanTrue:/true/,booleanFalse:/false/}}})}e.exports=o,o.displayName="jsonExtra",o.aliases=[]},23840:function(e){"use strict";function t(e){e.languages.txt={highlightA:{pattern:/[\u200B\u00A0].+?[\u200B\u00A0]/g},highlightB:{pattern:/[\u200C\u00A0].+?[\u200C\u00A0]/g}}}e.exports=t,t.displayName="txt",t.aliases=[]},45018:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/snippets/[slug]",function(){return n(60247)}])},23711:function(e){e.exports={post:"styles_post__v5a44",title:"styles_title__8NRYT",description:"styles_description__1Ei_s",headerImage:"styles_headerImage__3khy4",categories:"styles_categories__1BdoG",info:"styles_info__1D6yJ",body:"styles_body__hfQyP",key:"styles_key__3IugK",inline:"styles_inline__22A3Z",contentFit:"styles_contentFit__35Z19",spill:"styles_spill__3207V"}}},function(e){e.O(0,[774,719,888,179],(function(){return t=45018,e(e.s=t);var t}));var t=e.O();_N_E=t}]);