import React from 'react'
import { Stack, Heading, Text, Image, useColorMode } from '@chakra-ui/react'
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
      <Heading Heading as="h1" size="2xl" color={`mode.${colorMode}.text`}>
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
            I studied geology but didn't want to work as one, so I taught myself digital things. I've been a film
            editor, a graphic & UX designer, software developer, meetup organiser and a guy who starts up companies.
          </Text>
          <Text color={`mode.${colorMode}.subtext`}>
            I love hiking & rock climbing in wild places, and I'm slowly improving my golf swing.
          </Text>
          <Text color={`mode.${colorMode}.subtext`}>
            I believe that everything, everywhere ends, and all that will be left of you is what was in your heart. So
            be generous, help others and above all don't be an asshole.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
