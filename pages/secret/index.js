import Video from '@/components/Video'
import fin from './finlay.webm'

export default () => (
  <div>

  <p>welcome to finlay's lair 🐾</p>
  <p>a place of mystery and intrigue</p>


  <Video muted autoPlay loop video={
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

  </div>
)
