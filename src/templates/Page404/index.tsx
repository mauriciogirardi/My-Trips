import Link from 'next/link'
import * as S from './styles'

export default function PagesTemplate() {
  return (
    <S.Content>
      <S.Heading>This page could not be found!</S.Heading>

      <img
        src="img/hero-illustration.svg"
        alt="homem de frente para o computador"
      />

      <Link href="/">voltar para home</Link>
    </S.Content>
  )
}
