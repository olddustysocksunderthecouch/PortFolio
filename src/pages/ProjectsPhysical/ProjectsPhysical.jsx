import React from 'react'
import { Heading, Spacer, Stack, Text, useColorMode } from '@chakra-ui/react'
import { SeoHead } from '../../components/SeoHead'
import { ProjectPhysicalItem } from './ProjectPhysicalItem'
import { PROJECT_DATA } from './Data'

export const ProjectsPhysical = () => {
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
      <SeoHead pageKey="projectsPhysical" />
      <Heading Heading as="h1" size="2xl" color={`mode.${colorMode}.text`}>
        Physical Projects
      </Heading>
      <Stack as="flex" pb="1em">
        <Text color={`mode.${colorMode}.subtext`}>
          As much as I love building software I also love getting my hands dirty and build physical things! Here are a
          few of my projects from the last two years.
        </Text>
        <Text color={`mode.${colorMode}.subtext`}>
          My main passion is building software that helps people. When I'm not coding, I love designing and building
          physical things.
        </Text>
      </Stack>
      <Spacer />
      {PROJECT_DATA.map((project, index) => (
        <ProjectPhysicalItem
          key={index}
          title={project.title}
          desc={project.desc}
          tech={project.tech}
          images={project.images}
          colorMode={colorMode}
        />
      ))}
    </Stack>
  )
}
