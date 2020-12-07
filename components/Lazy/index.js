import {useInView} from 'react-intersection-observer'

const Lazy = ({children, config}) => {
  const {Client=children, Server} = children

  if(!process.browser) return (
    <noscript>
      {Server ? <Server /> : <Client _ref={null} inView={true} />}
    </noscript>
  )

  const [_ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
    ...config
  })

  return <Client _ref={_ref} inView={inView}/>
}

export default Lazy
