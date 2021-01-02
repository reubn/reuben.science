import {NextSeo, BreadcrumbJsonLd} from 'next-seo'

import {ChevronRight} from 'react-feather'

import Memoji from '@/components/Memoji'
import PostLink from '@/components/PostLink'
import ActiveLink from '@/components/ActiveLink'

import photos from '@/src/photos'
import sortPosts from '@/src/sortPosts'

import {main, me, profile, name, description, emoji, memoji, heading, posts as postsStyle, photos as photosStyle, photo, postLink, sectionWrapper, more} from './styles'

import * as posts from './posts/[slug].js'

const frameCount = Math.floor(315 / 3);
const getFrameURL = frame => `/me-360t/frame-${frame * 3}.webp`

export default function Home({posts, images, imageSize}) {
  return (
    <>
    <NextSeo
      title="Home"
      openGraph={{
        title: 'Home',
        site_name: process.env.NEXT_PUBLIC_DOMAIN,
      }}
    />

    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Home',
          item: `https://${process.env.NEXT_PUBLIC_DOMAIN}/`,
        }
      ]}
    />
      <main className={main}>
        <section className={me}>
          <Memoji className={memoji} frameCount={frameCount} getFrameURL={getFrameURL} width={Math.floor(459 * 1.5)} height={Math.floor(350 * 1.5)} />
          <div className={profile}>
            <h1 className={name}>Reuben</h1>
            <p className={description}>
              <span className={emoji}>{['🏥', '🌵', '🛠', '⛰', '📸'].map(em => <span>{em}</span>)}</span>
              No idea what's gonna end up on here, inevitably just some random shit. Limited competance.
            </p>
          </div>
        </section>
        {
          posts.length
            ? (
                <span className={sectionWrapper}>
                  <ActiveLink href="/posts">
                    <a className={heading}>
                      Recent Posts <ChevronRight className={more} aria-label="More Posts" />
                    </a>
                  </ActiveLink>
                  <section className={postsStyle}>
                    {sortPosts(posts).map(props => <PostLink key={props.slug} {...props} className={postLink}/>)}
                  </section>
                </span>
              )
            : null
        }
        {
          images.length
            ? (
                <span className={sectionWrapper}>
                  <ActiveLink href="https://unsplash.com/re">
                    <a className={heading}>
                      Recent Photos <ChevronRight className={more} aria-label="More Photos" />
                    </a>
                  </ActiveLink>
                  <section className={photosStyle} style={{'--columns': Math.min(images.length, 4), '--image-size': `${imageSize}px`}}>
                    {images.map(({src, id}) => (
                      <a href={`https://unsplash.com/photos/${id}`} className={photo} aria-label={`Unsplash Photo ${id}`} key={id}>
                        <img src={src} alt={`Unsplash Photo ${id}`} />
                      </a>)
                    )}
                  </section>
                </span>
              )
            : null
        }
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: await Promise.all((await posts.getStaticPaths()).paths.map(posts.getStaticProps).slice(0, 4)),
    images: (await photos()).slice(0, 8),
    imageSize: process.env.UNSPLASH_SIZE
  }
})
