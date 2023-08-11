import React from 'react'
import { Stack, IconButton, Link } from '@chakra-ui/react'
import { SITE_CONFIG } from '../configs/site-config'

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true,
}

const Footer = (props) => {
  return (
    <Stack
      as="footer"
      direction={'row'}
      spacing={[1, 2]}
      p={4}
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {SITE_CONFIG.author.accounts.map((sc) => (
        <IconButton
          key={sc.url}
          as={Link}
          isExternal
          href={sc.url}
          aria-label={sc.label}
          size="lg"
          colorScheme={sc.type}
          icon={sc.icon}
          {...iconProps}
        />
      ))}
    </Stack>
  )
}

export default Footer
