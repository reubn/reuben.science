import {useEffect, useRef, useState} from 'react'

import Head from 'next/head'

import {me, memoji} from './styles'

import * as posts from './posts/[slug].js'

// import videoA from '../public/me-cut.webm'
// import videoB from '../public/me-cut.mov'
//
// const Memoji = () => {
//   return null
//   const videoRef = useRef(null);
//
//   useEffect(() => {
//     const video = videoRef.current
//
//     const {x: vx, y: vy, width: vw, height: vh} = video.getBoundingClientRect()
//     console.log(video)
//     const [mx, my] = [vx + (vw / 2), vy + (vh / 2)]
//
//     const frameCount = video.frameCount
//
//     const handler = event => {
//       // console.log("mouse location:", event.clientX, event.clientY)
//       const {clientX: cx, clientY: cy} = event
//
//       const [dx, dy] = [cx - mx, cy - my]
//
//       const currentTime = Math.max(Math.min(frameCount, ((dx + vw / 2) / vw) * frameCount), 0)
//
//       window.requestAnimationFrame(() => video.currentTime = currentTime)
//
//       // console.log(currentTime)
//       // console.log({dx, vw})
//     }
//
//     const throttled = throttle(handler, 10)
//     window.addEventListener('mousemove', throttled)
//
//     return () => window.removeEventListener('mousemove', throttled)
//   })
//
//
//
//   return (
//     <video ref={videoRef} muted width="250" className={videoStyle}>
//       <source src={videoA} type="video/webm" />
//       <source src={videoB} type="video/quicktime" />
//       Sorry, your browser doesn't support embedded videos.
//     </video>
//   )
// }

// onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}
const frameCount = Math.floor(315 / 3);
const getFrameURL = frame => `/me-360t/frame-${frame * 3}.webp`


// TODO: Fade in head once images have loaded
const Memoji = props => {
  const canvasRef = useRef(null);

  const loadImages = () => {
    for (let frame = 0; frame <= frameCount; frame++) videoFrames.push(createImage(frame))
  }

  const createImage = frame => {
    const frameImage = new Image();
    frameImage.src = getFrameURL(frame)

    return frameImage
  }

  const drawImage = image => {
    if(image.complete) {
      const context = canvasRef.current.getContext("2d");

      context.clearRect(0, 0, image.width, image.height)
      context.drawImage(image, 0, 0);
    } else image.onload = () => drawImage(image)
  }

  const {current: videoFrames} = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current

    const firstFrame = createImage(0)
    drawImage(firstFrame)

    loadImages()

    const {x: vx, y: vy, width: vw, height: vh} = canvasRef.current.getBoundingClientRect()

    const [mx, my] = [vx + (vw / 2), vy + (vh / 2)]

    const handler = event => {
      const {clientX: cx, clientY: cy} = event
      const [dx, dy] = [cx - mx, cy - my]
      //
      const radians = Math.atan2(dx, - dy)
      const normalised = ((2 * Math.PI) + radians) % (2 * Math.PI)

      const fraction = (normalised / (2 * Math.PI))


      window.requestAnimationFrame(() => {
        // const currentIndex = Math.floor(Math.max(Math.min(frameCount, ((dx + vw / 2) / vw) * frameCount), 0))
        const currentIndex = Math.floor(Math.max(Math.min(frameCount, fraction * frameCount), 0))
        const currentImage = videoFrames[currentIndex];

        drawImage(currentImage)
      })
    }

    window.addEventListener('mousemove', handler)

    return () => window.removeEventListener('mousemove', handler)
  }, [])


  return  (
    <canvas {...props} ref={canvasRef} width="640" height="480" />
  )
}


export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>Reuben</title>
      </Head>

      <main className={me}>
        <Memoji className={memoji}/>
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: (await posts.getStaticPaths()).paths.map(posts.getStaticProps).map(({props}) => props)
  }
})
