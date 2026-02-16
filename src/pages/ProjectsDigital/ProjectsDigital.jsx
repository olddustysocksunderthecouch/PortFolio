import React from 'react'
import { Heading, Spacer, Stack, Text, useColorMode } from '@chakra-ui/react'
import { SeoHead } from '../../components/SeoHead'
import { ProjectDesignItem } from './ProjectDigitalItem'
import { PROJECT_DATA } from './Data'

export const ProjectsDigital = () => {
  const { colorMode } = useColorMode()

  return (
    <Stack
      as="main"
      color="#2D3748"
      backgroundColor={`mode.${colorMode}.background`}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="48rem"
      paddingTop="10rem"
      px="1.5rem"
    >
      <SeoHead pageKey="projectsDigital" />
      <Heading Heading as="h1" size={{ base: '3xl', md: '2xl' }} color={`mode.${colorMode}.text`}>
        Digital Projects
      </Heading>
      <Stack as="flex" pb="1em">
        <Text color={`mode.${colorMode}.subtext`}>
          I love to design and build things! Some have succeeded and others have failed. The joy that comes from
          creating something useful and learning is what keeps me going!
        </Text>
        <Text color={`mode.${colorMode}.subtext`}>
          My main passion is building software that helps people. When I'm not coding, I love designing and building
          physical things.
        </Text>
      </Stack>
      <Spacer />
      {PROJECT_DATA.map((project, index) => (
        <ProjectDesignItem
          key={index}
          title={project.title}
          desc={project.desc}
          tech={project.tech}
          image={project.image}
          links={project.links}
          colorMode={colorMode}
        />
      ))}
    </Stack>
  )
}
