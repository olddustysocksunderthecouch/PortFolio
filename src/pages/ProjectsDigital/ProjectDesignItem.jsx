import React from 'react'
import { Box, Stack, Heading, Flex, Text, Tag, Image, useColorMode, Grid, Skeleton } from '@chakra-ui/react'

export const ProjectDesignItem = ({ title, desc, tech, image }) => {
  const { colorMode } = useColorMode()

  return (
    <Stack marginBottom={5}>
      <Heading as="h2" size="xl" color={`mode.${colorMode}.career.text`}>
        {title}
      </Heading>
      <Grid gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr']} rounded="md">
        <Box w="100%">
          <Stack mt={2}>
            <Text fontSize="lg" fontWeight="semibold" lineHeight="short" color={`mode.${colorMode}.subtext`}>
              {desc}
            </Text>
            <Stack direction="row">
              {tech.split(',').map((tag) => (
                <Tag
                  size="sm"
                  padding="0 3px"
                  key={tag}
                  fontWeight="bold"
                  color={`mode.${colorMode}.career.subtext`}
                  bgColor={`mode.${colorMode}.career.tagBG`}
                >
                  {tag}
                </Tag>
              ))}
            </Stack>
          </Stack>
        </Box>
        <Flex w="100%" h="100%" alignItems="center" ml={{ sm: '0', md: '4' }} pt={{ sm: '4', md: '0' }}>
          <Image src={image} fallback={<Skeleton />} objectFit="cover" />
        </Flex>
      </Grid>
    </Stack>
  )
}
