import React from 'react'
import { Stack, Heading, Text, Image, useColorMode } from '@chakra-ui/react'
import communityImage from './assets/communityImage.jpg'

export const Community = () => {
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
        Community
      </Heading>
      <Stack spacing={2} marginBottom={8}>
        <Stack as="flex" marginLeft="auto" marginRight="auto">
          <Image
            borderRadius="full"
            boxSize="300px"
            objectFit="cover"
            src={communityImage}
            alt="Adrian Bunge"
            mb="1rem"
            mt="1rem"
          />
        </Stack>
        <Stack as="flex">
          <Text color={`mode.${colorMode}.subtext`}>
            I've been involved in the tech community for a long time. I've organised meetups, conferences and
            hackathons. I've also been a mentor and a mentee. I've been a speaker and a listener. I've been a teacher
            and a student.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
