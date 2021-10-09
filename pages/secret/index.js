import {NextSeo} from 'next-seo'

import Video from '@/components/Video'
import {main} from '../styles'

import finWebm from './finlay.webm'
import finMp4 from './finlay.mp4'

import {video} from './styles'

export default () => (
  <>
    <NextSeo noindex={true} nofollow={true}/>
    <main className={main}>
      <h1>Welcome to Finlay's Lair</h1>
      <Video
       className={video}
       muted
       autoPlay
       loop
       playsinline
       video={
         {
           size: {
             width: 1280,
             height: 720
           },
           sources: [{
             src: finWebm,
             type: 'video/webm'
           },
           {
             src: finMp4,
             type: 'video/mp4'
           }]
         }
       }
      />
      <p>🐾</p>
    </main>
  </>
)

export const getStaticProps = async () => ({
  props: {
    hidden: true
  }
})
