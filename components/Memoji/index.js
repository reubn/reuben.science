import {useEffect, useRef, useState} from 'react'

import supportsWebp from '@/src/supportsWebp'

import CTA from './CTA'

import {memoji as memojiStyle, ready as readyStyle, notReady as notReadyStyle, memojiWrapper, cta as ctaStyle, active} from './styles'

const Memoji = ({frameTimeout=5*1000, frameCount, getFrameURL, defaultFrameNumber=Math.floor(frameCount / 2), width, height, className, ...props}) => {
  const canvasRef = useRef(null)
  const {current: memojiFrames} = useRef([])
  const {current: savedMousePosition} = useRef({})

  const [ready, setReady] = useState(false)
  const [framesStartedToLoad, setFramesStartedToLoad] = useState(false)
  const [defaultFrameReady, setDefaultFrameReady] = useState(false)
  const [cta, setCTA] = useState(false)

  const loadFrame = frameNumber => {
    if(memojiFrames[frameNumber]) return memojiFrames[frameNumber]

    const frame = new Image()
    frame.src = getFrameURL(frameNumber)

    return frame
  }

  const loadFrames = async () => {
    setFramesStartedToLoad(true)
    createFrame(loadFrame(defaultFrameNumber)).then(() => setDefaultFrameReady(true))

    let loaded = false

    let loadingFrames = Array.from({length: frameCount}, (_, frameNumber) => loadFrame(frameNumber))

    const timeout = new Promise((res, rej) => frameTimeout && setTimeout(() => {
      if(!loaded) {
        loadingFrames.forEach((frame, frameNumber) => (frameNumber !== defaultFrameNumber) && frame.removeAttribute('src'))
        rej()
      } // else console.log('timeout called but already finished')
    }, frameTimeout))

    const loadedFrames = Promise.all(loadingFrames.map(async (frame, frameNumber) => memojiFrames[frameNumber] = await createFrame(frame)))
      .then(frames => (loaded = true, frames))

    return Promise.race([timeout, loadedFrames])
  }

  const createFrame = async frame => {
    const decoded = await frame.decode().catch(() => null)

    if(decoded) return frame

    const webpStatus = await supportsWebp()
    if(webpStatus) return frame

    const {default: loadWebp} = await import('@/src/loadWebp')
    const {default: decodeWebp} = await import('@/src/decodeWebp')

    const polyfilledFrame = new Image()
    polyfilledFrame.webpData = await loadWebp(frame.src)
    polyfilledFrame.getPollyfilledSrc = async function(){this.src = await decodeWebp(this.webpData)}

    return polyfilledFrame
  }

  const drawFrame = image => {
    if(!image || !canvasRef.current) return
    if(!image.src) return image.getPollyfilledSrc()
    const context = canvasRef.current.getContext("2d")

    // center image
    const [x, y] = [canvasRef.current.width / 2 - image.width / 2, canvasRef.current.height / 2 - image.height / 2]

    context.clearRect(x, y, image.width, image.height)
    context.drawImage(image, x, y)
  }

  const interactionToFrameNumber = ({mx, my, cx, cy, fraction=null}) => {
    if(fraction === null) {
      // delta between center and mouse
      const [dx, dy] = [cx - mx, cy - my]

      const radians = Math.atan2(dx, - dy) // angle between center and mouse
      const normalised = ((2 * Math.PI) + radians) % (2 * Math.PI) // 0 is north, clockwise

      fraction = (normalised / (2 * Math.PI))
    }

    return Math.floor(Math.max(Math.min(fraction * frameCount, frameCount), 0))
  }

  const tiltHead = ({mx, my, cx, cy, fraction=null}) => {
    const frameNumber = interactionToFrameNumber({mx, my, cx, cy, fraction})

    window.requestAnimationFrame(() => drawFrame(memojiFrames[frameNumber]))
  }

  const animateHead = ({fr, to}) => {
    if(isNaN(to)) return

    const direction = to > fr ? +1 : -1
    const difference = Math.abs(to - fr)

    let frameNumber = fr;
    const interval = setInterval(() => {
      frameNumber = frameNumber + direction;

      if((direction === -1 && (frameNumber < to)) || (direction === 1 && (frameNumber > to))) return clearInterval(interval)

      window.requestAnimationFrame(() => drawFrame(memojiFrames[frameNumber]))
    }, 7)
  }

  const getMemojiPosition = () => {
    // canvas position + sizing
    const {x: vx, y: vy, width: vw, height: vh} = canvasRef.current.getBoundingClientRect()

    // translate to center of canvas
    return {
      mx: vx + (vw / 2),
      my: vy + (vh / 2)
    }
  }


  useEffect(() => {
    console.log({defaultFrameReady, ready, framesStartedToLoad})
  }, [defaultFrameReady, ready, framesStartedToLoad])

  useEffect(() => {
    if(!framesStartedToLoad) loadFrames()
      .then(() => setReady(true))
      .catch(() => null)
      .finally(async () => drawFrame(await createFrame(loadFrame(defaultFrameNumber))))
  }, [framesStartedToLoad])

  useEffect(() => {
    if(defaultFrameReady) drawFrame(memojiFrames[defaultFrameNumber])
  }, [defaultFrameReady])

  useEffect(() => {
    if(ready) try {
      animateHead({fr: defaultFrameNumber, to: interactionToFrameNumber({...getMemojiPosition(), ...savedMousePosition})})
    } catch(_){}

    const mouseHandler = event => {
      const {clientX: cx, clientY: cy} = event

      if(!ready) {
        savedMousePosition.cx = cx
        savedMousePosition.cy = cy

        return
      }

      if(canvasRef.current) tiltHead({...getMemojiPosition(), cx, cy})
    }

    let memojiHasBeenTouched = false
    if("ontouchstart" in window && !memojiHasBeenTouched) {
      setCTA(ready && localStorage.getItem('memojiKnowsIsInteractive') !== 'true')
      // crude animate head before touch interaction
      let f = 0
      let direction = +1
      const intervalA = setInterval(() => tiltHead({fraction: (f = (f + 1 + (direction * 0.01 * Math.random())) % 1)}), 10)
      const intervalB = setInterval(() => direction *= Math.random() > 0.5 ? -1 : +1, 10 * 200)


      let sxa = []
      let sya = []
      const touchHandler = event => {
        const {clientX: cx, clientY: cy} = event.changedTouches[0]

        if(sxa.push(cx) > 3) sxa.shift()
        if(sya.push(cy) > 3) sya.shift()

        let sx = sxa.reduce((acc, n) => acc + n, 0) / sxa.length
        let sy = sya.reduce((acc, n) => acc + n, 0) / sya.length
        if(Math.abs(cy - sy) < Math.abs(cx - sx)) event.preventDefault()

        memojiHasBeenTouched = true
        localStorage.setItem('memojiKnowsIsInteractive', 'true')
        clearInterval(intervalA)
        clearInterval(intervalB)
        setCTA(false)

        mouseHandler({clientX: cx, clientY: cy})
      }

      canvasRef.current.addEventListener('touchstart', touchHandler)
      canvasRef.current.addEventListener('touchmove', touchHandler)

      return () => {
        clearInterval(intervalA)
        clearInterval(intervalB)

        if(canvasRef.current){
          canvasRef.current.removeEventListener('touchstart', touchHandler)
          canvasRef.current.removeEventListener('touchmove', touchHandler)
        }
      }
    }
    else {
      window.addEventListener('mousemove', mouseHandler)

      return () => window.removeEventListener('mousemove', mouseHandler)
    }
  }, [ready])


  return  (<span className={memojiWrapper}>
    <CTA className={`${ctaStyle} ${cta ? active : ''}`} />
    <canvas {...props} className={[memojiStyle, className || '', (ready || defaultFrameReady) ? readyStyle : notReadyStyle].join(' ')} ref={canvasRef} width={width} height={height} />
  </span>)
}

export default Memoji
