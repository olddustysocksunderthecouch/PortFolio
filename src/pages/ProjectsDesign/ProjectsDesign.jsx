import React from 'react'
import { Heading, Spacer, Stack, Text, useColorMode } from '@chakra-ui/react'
import { SeoHead } from '../../components/SeoHead'
import { ProjectDesignItem } from './ProjectDesignItem'
import { PROJECT_DATA } from './Data'

export const ProjectsDesign = () => {
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
      <SeoHead pageKey="projectsDesign" />
      <Heading Heading as="h1" size="2xl" color={`mode.${colorMode}.text`}>
        Design Projects
      </Heading>
      <Stack as="flex" pb="1em">
        <Text color={`mode.${colorMode}.subtext`}>
          Design is something I really enjoy thinking about. I started designing posters using Adobe Illustrator and
          then graduated to Sketch and Figma. I've also dabbled with architecture design concepts.
        </Text>
      </Stack>
      <Spacer />
      {PROJECT_DATA.map((project, index) => (
        <ProjectDesignItem
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
