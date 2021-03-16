import { NextSeo } from 'next-seo'

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

export default function PagesTemplate({ body, heading }: PageTemplateProps) {
  return (
    <>
      <NextSeo title={`${heading} - My Trips`} />

      <S.Content>
        <LinkWrapper href="/">
          <CloseOutline size={32} aria-label="Voltar para home" />
        </LinkWrapper>

        <S.Heading>{heading}</S.Heading>

        <S.Body>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </S.Body>
      </S.Content>
    </>
  )
}
