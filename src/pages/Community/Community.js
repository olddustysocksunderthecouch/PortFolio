import React from 'react'
import { Stack, Heading, Text, Image, Spacer, useColorMode } from '@chakra-ui/react'
import communityImage from './assets/communityImage.jpg'
import { COMMUNITY_DATA } from './Data'
import { CommunityItem } from './CommunityItem'

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
            I've been involved in the tech community for a long time. I love to learn, teach and bring people together!
          </Text>
        </Stack>
      </Stack>
      <Spacer />
      {COMMUNITY_DATA.map((community, index) => (
        <CommunityItem
          key={index}
          title={community.title}
          period={community.period}
          desc={community.desc}
          links={community.links}
        />
      ))}
    </Stack>
  )
}
