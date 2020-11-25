import {useEffect, useRef, useState} from 'react'

// TODO: Fade in head once images have loaded
const Memoji = ({frameCount, getFrameURL, defaultFrame=Math.floor(frameCount / 2), width=640, height=480, ...props}) => {
  const canvasRef = useRef(null)
  const {current: videoFrames} = useRef([])

  const loadImages = () => {
    for (let frame = 0; frame <= frameCount; frame++) videoFrames.push(createImage(frame))
  }

  const createImage = frame => {
    const frameImage = new Image()
    frameImage.src = getFrameURL(frame)

    return frameImage
  }

  const drawImage = image => {
    if(image.complete) {
      const context = canvasRef.current.getContext("2d")

      context.clearRect(0, 0, image.width, image.height)
      context.drawImage(image, 0, 0)
    } else image.onload = () => drawImage(image)
  }

  useEffect(() => {
    const canvas = canvasRef.current

    const firstFrame = createImage(defaultFrame)
    drawImage(firstFrame)

    loadImages()

    // canvas position + sizing
    const {x: vx, y: vy, width: vw, height: vh} = canvasRef.current.getBoundingClientRect()

    // translate to center of canvas
    const [mx, my] = [vx + (vw / 2), vy + (vh / 2)]

    const handler = event => {
      const {clientX: cx, clientY: cy} = event

      // delta between center and mouse
      const [dx, dy] = [cx - mx, cy - my]

      const radians = Math.atan2(dx, - dy) // angle between center and mouse
      const normalised = ((2 * Math.PI) + radians) % (2 * Math.PI) // 0 is north, clockwise

      const fraction = (normalised / (2 * Math.PI))

      window.requestAnimationFrame(() => {
        const currentIndex = Math.floor(Math.max(Math.min(fraction * frameCount, frameCount), 0))
        const currentImage = videoFrames[currentIndex]

        drawImage(currentImage)
      })
    }

    window.addEventListener('mousemove', handler)

    return () => window.removeEventListener('mousemove', handler)
  }, [])


  return  (
    <canvas {...props} ref={canvasRef} width={width} height={height} />
  )
}

export default Memoji
