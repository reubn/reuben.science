import Document, {Html, Head, Main, NextScript} from 'next/document'

class LangDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
        {process.env.NODE_ENV !== 'production' && <script dangerouslySetInnerHTML={{ __html: `
  window.addEventListener('error', event => {
    event.stopImmediatePropagation()
  })

  window.addEventListener('unhandledrejection', event => {
    event.stopImmediatePropagation()
  })
` }} />}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default LangDocument
