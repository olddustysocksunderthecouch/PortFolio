import React from 'react'
import { Stack, Heading, Text, Image, useColorMode, Link } from '@chakra-ui/react'
import { SeoHead } from '../../components/SeoHead'
import profileImage from './assets/profileImage.jpeg'

export const Contact = () => {
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
      <SeoHead pageKey="contact" />
      <Heading Heading as="h1" size="2xl" color={`mode.${colorMode}.text`}>
        Contact Me! 👋
      </Heading>
      <Stack spacing={2} marginBottom={'50%'}>
        <Stack as="flex" mt={'2rem'}>
          <Text color={`mode.${colorMode}.subtext`}>
            I'm always keen to chat about new projects and opportunities! <br />
            <br />
            If you'd like to get in touch, please send me a message on{' '}
            <Link
              href="https://www.linkedin.com/in/adrianbunge/"
              isExternal
              color={`mode.${colorMode}.link`}
              textDecoration="underline"
              textUnderlineOffset="2px"
              _hover={{
                color: colorMode === 'light' ? 'primary.700' : 'primary.200',
                textDecorationThickness: '2px',
              }}
            >
              LinkedIn
            </Link>
          </Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
