import React from 'react'
import { Stack, Heading, Text, Spacer, useColorMode } from '@chakra-ui/react'
import { SeoHead } from '../../components/SeoHead'
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
      <SeoHead pageKey="community" />
      <Heading Heading as="h1" size={{ base: '3xl', md: '2xl' }} color={`mode.${colorMode}.text`}>
        Community
      </Heading>
      <Stack spacing={2} marginBottom={8}>
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
          image={community.image}
          links={community.links}
        />
      ))}
    </Stack>
  )
}
