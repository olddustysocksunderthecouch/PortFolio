import React from 'react'
import { Grid, Stack, Heading, Text, useColorMode, Link } from '@chakra-ui/react'

export const CommunityItem = ({ title, period, desc, links = [] }) => {
  const { colorMode } = useColorMode()

  return (
    <Stack marginBottom={5}>
      <Heading as="h2" size="xl" color={`mode.${colorMode}.career.text`}>
        {title}
      </Heading>
      <Grid rounded="md">
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
                  color={`mode.${colorMode}.career.text`}
                  textDecoration="underline"
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          )}
        </Stack>
      </Grid>
    </Stack>
  )
}
