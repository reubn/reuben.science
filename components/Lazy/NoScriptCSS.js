const NoScriptCSS = () => (
  <noscript>
    <style dangerouslySetInnerHTML={{__html: '[data-noscript="no"]{display: none!important}'}} />
  </noscript>
)

export default NoScriptCSS
