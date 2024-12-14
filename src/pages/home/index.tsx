import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/Calendar.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Hassle-free scheduling | Ignite Call"
        description="Connect your calendar and allows people mark appointments in their
            free time."
      />
      <Container>
        <Hero>
          <Heading size="4xl">Hassle-free scheduling</Heading>
          <Text size="lg">
            Connect your calendar and allows people mark appointments in their
            free time.
          </Text>
          <ClaimUsernameForm />
        </Hero>
        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Calendar symbolizing application in operation"
          />
        </Preview>
      </Container>
    </>
  )
}
