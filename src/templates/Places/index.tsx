import { NextSeo } from 'next-seo'

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import Image from 'next/image'

import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'
import { useRouter } from 'next/dist/client/router'

type ImageProps = {
  height: number
  width: number
  url: string
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
    location: {
      latitude: number
      longitude: number
    }
  }
}

export default function Places({ place }: PlaceTemplateProps) {
  const route = useRouter()

  if (route.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={place.description?.text}
        canonical=""
        openGraph={{
          url: '',
          title: `${place.name} - My Trips`,
          description: place.description?.text,

          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: place.name
            }
          ]
        }}
      />

      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                width={900}
                height={550}
                quality={75}
                className="image"
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
