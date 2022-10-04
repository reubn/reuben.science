import {useRef, useEffect, useState, useMemo} from 'react'

const useResize = () => {
  const [rect, setRect] = useState({})

  const ref = useRef(null)
  const {current: element} = ref

  if(!global.ResizeObserver) return {ref}

  const resizeObserver = useMemo(() => new ResizeObserver(() => setRect(element?.getBoundingClientRect())), [element])

  useEffect(() => {
    if(!element) return
    setRect(element?.getBoundingClientRect() ?? {})

    resizeObserver.observe(element)

    return () => resizeObserver.unobserve(element)
  }, [element, resizeObserver])

  return {ref, rect}
}

export default useResize