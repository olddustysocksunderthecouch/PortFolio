import React from 'react'
import { Stack, Heading, Text, Image, Link, useColorMode } from '@chakra-ui/react'
import { SeoHead } from '../../components/SeoHead'
import profileImage from './assets/profileImage.jpeg'

export const About = () => {
  const { colorMode } = useColorMode()

  return (
    <Stack
      as="main"
      padding="1.5rem"
      color="#2D3748"
      backgroundColor={`mode.${colorMode}.background`}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="48rem"
      paddingTop="10rem"
    >
      <SeoHead pageKey="about" />
      <Heading Heading as="h1" size={{ base: '3xl', md: '2xl' }} color={`mode.${colorMode}.text`}>
        About Me
      </Heading>
      <Stack spacing={2} marginBottom={8}>
        <Stack as="flex" marginLeft="auto" marginRight="auto">
          <Image
            borderRadius="full"
            boxSize="300px"
            objectFit="cover"
            src={profileImage}
            alt="Adrian Bunge"
            mb="1rem"
            mt="1rem"
          />
        </Stack>
        <Stack as="flex">
          <Text color={`mode.${colorMode}.subtext`}>
            Hi, I'm Adrian! I studied geology but didn't want to work as one, so I taught myself digital things. I've
            been a film editor, UX designer, software dev, meetup organiser, and a guy who starts up companies.
          </Text>
          <Text color={`mode.${colorMode}.subtext`}>
            Right now, I'm building{' '}
            <Link
              href="https://www.findhomes.co.za"
              isExternal
              color={`mode.${colorMode}.link`}
              textDecoration="underline"
              textUnderlineOffset="2px"
              _hover={{
                color: colorMode === 'light' ? 'primary.700' : 'primary.200',
                textDecorationThickness: '2px',
              }}
            >
              FindHomes
            </Link>{' '}
            as CEO/CTO - trying to fix the information asymmetry in SA property because, honestly, buying a home
            shouldn't feel like a gamble. I wrote a book about it.{' '}
            <Link
              href="https://book.findhomes.co.za/8laws"
              isExternal
              color={`mode.${colorMode}.link`}
              textDecoration="underline"
              textUnderlineOffset="2px"
              _hover={{
                color: colorMode === 'light' ? 'primary.700' : 'primary.200',
                textDecorationThickness: '2px',
              }}
            >
              Read it here!
            </Link>
          </Text>
          <Text color={`mode.${colorMode}.subtext`}>
            Aside from property and tech, I love hiking, rock climbing in wild places, and I'm slowly improving my golf
            swing. I believe that everything, everywhere ends, and all that will be left of you is what was in your
            heart. So be generous, help others, and above all, don't be an asshole.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
