import {NextSeo} from 'next-seo'

import Video from '@/components/Video'
import {main} from '../styles'

import fin from './finlay.webm'

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
       video={
         {
           size: {
             width: 1280,
             height: 720
           },
           sources: [{
             src: fin,
             type: 'video/webm'
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
