import React from 'react'
import { Stack, Heading, Text, Image, useColorMode, Link, Button } from '@chakra-ui/react'
import profileImage from './assets/profileImage.jpeg'

export const Home = () => {
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
      <Stack spacing={2} marginBottom={8}>
        <Stack as="flex" marginLeft="auto" marginRight="auto">
          <Heading Heading as="h1" size="2xl" color={`mode.${colorMode}.text`}>
            Hi, I'm Adrian!
          </Heading>
          <Image
            borderRadius="full"
            boxSize={{ sm: '15em', md: '20em' }}
            objectFit="cover"
            src={profileImage}
            alt="Adrian Bunge"
            mb="2rem"
            mt="1rem"
          />
        </Stack>
        <Stack as="flex">
          <Text color={`mode.${colorMode}.subtext`}>
            I love to design and build things! Some have succeeded and others have failed. The joy that comes from
            creating something useful and learning is what keeps me going!
          </Text>
          <Text color={`mode.${colorMode}.subtext`}>
            My main passion is building software that helps people. When I'm not coding, I love designing and building
            physical things.
          </Text>
          <Text color={`mode.${colorMode}.subtext`}>
            This website is about sharing some of my projects. If you'd like to learn more about my work experience and
            education, please visit my{' '}
            <Link color="teal.500" href="https://www.linkedin.com/in/adrianbunge/">
              LinkedIn profile
            </Link>
            .
          </Text>
        </Stack>
      </Stack>
      <Heading as="h3" size="lg" color={`mode.${colorMode}.text`}>
        Projects & Things
      </Heading>
      <Text color={`mode.${colorMode}.subtext`}>
        I've built a lot of things over the years. Some were digital and some were physical. Some were for myself and
        some were for others.
      </Text>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" variant="outline" size="lg" mt="1rem" mb="1rem" href="/projects">
          Digital
        </Button>
        <Button colorScheme="teal" variant="outline" size="lg" mt="1rem" mb="1rem" href="/opensource">
          Physical
        </Button>
        <Button colorScheme="teal" variant="outline" size="lg" mt="1rem" mb="1rem" href="/opensource">
          Community
        </Button>
      </Stack>
    </Stack>
  )
}
