import {useEffect, useRef, useState} from 'react'

import {ready as readyStyle, notReady as notReadyStyle} from './styles'

const Memoji = ({frameCount, getFrameURL, defaultFrame=Math.floor(frameCount / 2), width, height, className, ...props}) => {
  const canvasRef = useRef(null)
  const {current: videoFrames} = useRef([])
  const {current: savedMousePosition} = useRef({})

  const [ready, setReady] = useState(false)

  const loadImages = async () => {
    const promises = Array.from({length: frameCount}, async (_, frame) => videoFrames[frame] = await createImage(frame))

    return Promise.all(promises)
  }

  const createImage = async frame => {
    if(videoFrames[frame]) return videoFrames[frame]

    const frameImage = new Image()
    frameImage.src = getFrameURL(frame)

    await frameImage.decode()

    return frameImage
  }

  const drawImage = image => {
    if(!image) return
    const context = canvasRef.current.getContext("2d")

    // center image
    const [x, y] = [canvasRef.current.width / 2 - image.width / 2, canvasRef.current.height / 2 - image.height / 2]

    context.clearRect(x, y, image.width, image.height)
    context.drawImage(image, x, y)
  }

  const tiltHead = ({mx, my, cx, cy, fraction=null}) => {
    if(fraction === null) {
      // delta between center and mouse
      const [dx, dy] = [cx - mx, cy - my]

      const radians = Math.atan2(dx, - dy) // angle between center and mouse
      const normalised = ((2 * Math.PI) + radians) % (2 * Math.PI) // 0 is north, clockwise

      fraction = (normalised / (2 * Math.PI))
    }

    window.requestAnimationFrame(() => {
      const currentIndex = Math.floor(Math.max(Math.min(fraction * frameCount, frameCount), 0))
      const currentImage = videoFrames[currentIndex]

      drawImage(currentImage)
    })
  }

  useEffect(() => {
    const canvas = canvasRef.current

    // canvas position + sizing
    const {x: vx, y: vy, width: vw, height: vh} = canvasRef.current.getBoundingClientRect()

    // translate to center of canvas
    const [mx, my] = [vx + (vw / 2), vy + (vh / 2)]

    if(!ready) loadImages()
      .then(() => setReady(true))
      .then(async () => drawImage(await createImage(defaultFrame)))
    else try {tiltHead({mx, my, ...savedMousePosition})} catch(_){console.log('')}

    const handler = event => {
      const {clientX: cx, clientY: cy} = event

      if(!ready) {
        savedMousePosition.cx = cx
        savedMousePosition.cy = cy

        return
      }

      tiltHead({mx, my, cx, cy})
    }

    window.addEventListener('mousemove', handler)

    return () => window.removeEventListener('mousemove', handler)
  }, [ready])


  return  (
    <canvas {...props} className={[className || '', ready ? readyStyle : notReadyStyle].join(' ')} ref={canvasRef} width={width} height={height} />
  )
}

export default Memoji
