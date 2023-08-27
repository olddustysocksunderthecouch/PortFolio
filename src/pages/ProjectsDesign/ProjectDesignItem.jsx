import React from 'react'
import { Box, Stack, Heading, Flex, Text, Tag, Image, useColorMode, Grid } from '@chakra-ui/react'
import ImageGallery from 'react-image-gallery'

export const ProjectDesignItem = ({ title, desc, images }) => {
  const { colorMode } = useColorMode()

  return (
    <Stack marginBottom={5}>
      <Heading as="h2" size="xl" color={`mode.${colorMode}.career.text`}>
        {title}
      </Heading>
      <Grid
        gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr']}
        borderColor={`mode.${colorMode}.border`}
        rounded="md"
      >
        <Box w="100%">
          <Stack mt={2}>
            <Box fontWeight="semibold" lineHeight="short" color={`mode.${colorMode}.subtext`}>
              {desc}
            </Box>
          </Stack>
        </Box>
        <Flex w="100%" h="100%" alignItems="center" ml={{ sm: '0', md: '4' }} pt={{ sm: '4', md: '0' }}>
          <ImageGallery items={images} showBullets showPlayButton={false} />
          {/* <Image src={image} fallback={<Skeleton />} objectFit="cover" borderRadius={'16'} /> */}
        </Flex>
      </Grid>
    </Stack>
  )
}
