import React from 'react'
import { Box, Stack, Heading, Flex, Text, Tag, Image, useColorMode, Grid, Skeleton, Link } from '@chakra-ui/react'

export const ProjectDesignItem = ({ title, desc, tech, image, links = [] }) => {
  const { colorMode } = useColorMode()
  const projectLinks = links
    .map((link, index) => {
      if (typeof link === 'string') {
        return {
          label: 'View link',
          href: link,
        }
      }

      if (!link || typeof link !== 'object') {
        return null
      }

      const href = link.href || link.url
      if (!href) {
        return null
      }

      return {
        label: link.label || link.text || `Link ${index + 1}`,
        href,
      }
    })
    .filter(Boolean)

  return (
    <Stack marginBottom={5}>
      <Heading as="h2" size={{ base: 'lg', md: 'xl' }} color={`mode.${colorMode}.career.text`}>
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
            {projectLinks.length > 0 && (
              <Flex direction="row" wrap="wrap" gap={2} pt={2}>
                {projectLinks.map((link, index) => (
                  <Link
                    key={`${title}-${link.href}-${index}`}
                    href={link.href}
                    isExternal
                    fontWeight="semibold"
                    color={`mode.${colorMode}.link`}
                    textDecoration="underline"
                    textUnderlineOffset="2px"
                    _hover={{
                      color: colorMode === 'light' ? 'primary.700' : 'primary.200',
                      textDecorationThickness: '2px',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Flex>
            )}
          </Stack>
        </Box>
        <Flex w="100%" h="100%" alignItems="center" ml={{ sm: '0', md: '4' }} pt={{ sm: '4', md: '0' }}>
          <Image src={image} fallback={<Skeleton />} objectFit="cover" />
        </Flex>
      </Grid>
    </Stack>
  )
}
