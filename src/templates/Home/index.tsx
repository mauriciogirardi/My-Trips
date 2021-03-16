import { NextSeo } from 'next-seo'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import dynamic from 'next/dynamic'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="Um simple projeto para mostrar em um mapa os lugares que eu fui e quero ir e informações e
        fotos"
        canonical=""
        openGraph={{
          url: '',
          title: 'My trips',
          description:
            'Um simple projeto para mostrar em um mapa os lugares que eu fui e quero ir e informações e fotos',

          images: [
            {
              url: '',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],

          site_name: 'My Trips'
        }}
      />

      <Map places={places} />

      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
    </>
  )
}
