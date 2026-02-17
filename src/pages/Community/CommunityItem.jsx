import React from 'react'
import { Box, Grid, Stack, Heading, Text, useColorMode, Link, Image, Flex, Skeleton } from '@chakra-ui/react'

export const CommunityItem = ({ title, period, desc, image, links = [] }) => {
  const { colorMode } = useColorMode()

  return (
    <Stack marginBottom={5}>
      <Heading as="h2" size={{ base: 'lg', md: 'xl' }} color={`mode.${colorMode}.career.text`}>
        {title}
      </Heading>
      <Grid gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr']} rounded="md">
        <Box w="100%">
          <Stack mt={2}>
            <Text fontSize="md" fontWeight="bold" color={`mode.${colorMode}.subtext`}>
              {period}
            </Text>
            {desc && (
              <Text fontSize="lg" fontWeight="semibold" lineHeight="short" color={`mode.${colorMode}.subtext`}>
                {desc}
              </Text>
            )}
            {links.length > 0 && (
              <Stack direction="row" wrap="wrap" gap={2} pt={1}>
                {links.map((link, index) => (
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
              </Stack>
            )}
          </Stack>
        </Box>
        {image && (
          <Flex w="100%" h="100%" alignItems="center" ml={{ sm: '0', md: '4' }} pt={{ sm: '4', md: '0' }}>
            <Image src={image} alt={title} fallback={<Skeleton />} objectFit="cover" />
          </Flex>
        )}
      </Grid>
    </Stack>
  )
}
