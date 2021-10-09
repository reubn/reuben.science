import Video from '@/components/Video'
import fin from './finlay.webm'
import {video} from './styles'
import {main} from '../styles'

export default () => (
  <main className={main}>

  <p>welcome to finlay's lair 🐾</p>
  <p>a place of mystery and intrigue</p>


  <Video className={video} muted autoPlay loop video={
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
  } />

<p>🐾</p>
  </main>
)
