
import CardLink from '@/components/CardLink'

import twet from './2018.svg'
import twtz from './2020.svg'
import twto from './2021.svg'
import twtt from './2022.svg'
import twttb from './2022b.svg'
import twtth from './2023.svg'
import twtf from './2024.svg'

import {main} from '../styles'

import {section} from './styles'
import { CarouselJsonLd } from 'next-seo'

const cards = [
  {
    title: '방탄소년단',
    year: 2018,
    svg: twet,
  },
  {
    title: 'Ysgyryd',
    year: 2020,
    svg: twtz,
  },
  {
    title: 'P',
    year: 2021,
    svg: twto,
  },
  {
    title: 'Iris',
    year: '2022b',
    svg: twttb,
  },
  {
    title: 'Crocodile',
    year: 2022,
    svg: twtt,
  },
  {
    title: 'PHOEBE',
    year: 2023,
    svg: twtth,
  },
  {
    title: 'Snowflake',
    year: 2024,
    svg: twtf,
  },
]

export default () => {
  return (
    <>
      <main className={main}>
        <section className={section}>
          {cards.map((card, i) => <CardLink key={card.year} card={card} />)}
        </section>
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    hidden: true
  }
})