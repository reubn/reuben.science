import {useEffect, useRef, useState} from 'react'

import {memoji as memojiStyle, ready as readyStyle, notReady as notReadyStyle} from './styles'

const Memoji = ({frameCount, getFrameURL, defaultFrameNumber=Math.floor(frameCount / 2), width, height, className, ...props}) => {
  const canvasRef = useRef(null)
  const {current: memojiFrames} = useRef([])
  const {current: savedMousePosition} = useRef({})

  const [ready, setReady] = useState(false)
  const [framesLoading, setFramesLoading] = useState(false)
  const [singleFrameReady, setSingleFrameReady] = useState(false)

  const loadFrame = frameNumber => {
    if(memojiFrames[frameNumber]) return memojiFrames[frameNumber]

    const frame = new Image()
    frame.src = getFrameURL(frameNumber)

    return frame
  }

  const loadFrames = async () => {
    setFramesLoading(true)
    createFrame(loadFrame(defaultFrameNumber)).then(() => setSingleFrameReady(true))

    let loading = Array.from({length: frameCount}, (_, frameNumber) => loadFrame(frameNumber))

    const timeout = setTimeout(() => {
      loading.forEach((frame, frameNumber) => (frameNumber !== defaultFrameNumber) && (frame.src = ''))
      loading = null
    }, 1000 * 5) // 5sec

    const loaded = Promise.all(loading.map(async (frame, frameNumber) => memojiFrames[frameNumber] = await createFrame(frame)))
      .then(frames => (clearTimeout(timeout), frames))

    return loading ? loaded : null
  }

  const createFrame = async frame => {
    await(await frame).decode()

    return frame
  }

  const drawFrame = image => {
    if(!image || !canvasRef.current) return
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
    console.log({singleFrameReady, ready, framesLoading})
    const canvas = canvasRef.current

    const {mx, my} = getMemojiPosition()

    if(!framesLoading) loadFrames()
      .then(() => setReady(true))
      .then(async () => drawFrame(await createFrame(loadFrame(defaultFrameNumber))))

    if(singleFrameReady) drawFrame(memojiFrames[defaultFrameNumber])

    if(ready) try {
      animateHead({fr: defaultFrameNumber, to: interactionToFrameNumber({...getMemojiPosition(), ...savedMousePosition})})
    } catch(_){}

    const handler = event => {
      const {clientX: cx, clientY: cy} = event

      if(!ready) {
        savedMousePosition.cx = cx
        savedMousePosition.cy = cy

        return
      }

      tiltHead({...getMemojiPosition(), cx, cy})
    }

    let touched = false
    if("ontouchstart" in window && !touched) {
      // crude animate head before touch interaction
      let f = 0
      let direction = +1
      const intervalA = setInterval(() => tiltHead({fraction: (f = (f + 1 + (direction * 0.01 * Math.random())) % 1)}), 10)
      const intervalB = setInterval(() => direction *= Math.random() > 0.5 ? -1 : +1, 10 * 200)

      const touchHandler = event => {
        const {clientX: cx, clientY: cy} = event.changedTouches[0]

        touched = true
        clearInterval(intervalA)
        clearInterval(intervalB)

        handler({clientX: cx, clientY: cy})

        event.preventDefault()
      }

      canvasRef.current.addEventListener('touchstart', touchHandler, false)
      canvasRef.current.addEventListener('touchmove', touchHandler, false)

      return () => {
        clearInterval(intervalA)
        clearInterval(intervalB)

        if(canvasRef.current){
          canvasRef.current.removeEventListener('touchstart', touchHandler, false)
          canvasRef.current.removeEventListener('touchmove', touchHandler, false)
        }
      }
    }
    else {
      window.addEventListener('mousemove', handler)

      return () => window.removeEventListener('mousemove', handler)
    }

  }, [ready, singleFrameReady, framesLoading])


  return  (
    <canvas {...props} className={[memojiStyle, className || '', (ready || singleFrameReady) ? readyStyle : notReadyStyle].join(' ')} ref={canvasRef} width={width} height={height} />
  )
}

export default Memoji
