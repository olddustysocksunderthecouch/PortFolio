import React, { useState } from 'react'
import { Box, Flex, Avatar, IconButton, useColorMode } from '@chakra-ui/react'
import { FiSun, FiMenu } from 'react-icons/fi'
import { FaMoon } from 'react-icons/fa'
import profileCartoon from './assets/profileCartoon.jpg'
import { TopNavigationItem } from './NavItem'
import { TOP_NAV_LINKS } from './Data'

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true,
}

export const Header = () => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)
  const { colorMode, toggleColorMode } = useColorMode()
  const navLinkBg = colorMode === 'light' ? 'gray.50' : 'mode.dark.cardBG'

  return (
    <Flex
      position="fixed"
      as="nav"
      alignContent="center"
      width={'100%'}
      padding={{ base: '1rem', md: '1.5rem' }}
      boxShadow="sm"
      backgroundColor={navLinkBg}
      justifyContent={{ base: 'stretch', md: 'center' }}
      zIndex={10}
    >
      <Flex justifyContent={'stretch'} width={{ base: '100%', md: '52rem' }} flexDirection={{ base: 'column', md: 'row' }}>
        <Flex align="center" justifyContent="space-between" mr={{ md: '16' }} width={{ base: '100%', md: '8' }}>
          <Avatar
            src={profileCartoon}
            boxSize={{ base: '2.5rem', sm: '2.8rem', md: '3rem' }}
          />
          <IconButton
            aria-label="Toggle navigation menu"
            icon={<FiMenu />}
            onClick={handleToggle}
            display={{ base: 'inline-flex', md: 'none' }}
            variant="ghost"
            isRound
            size="md"
            fontSize="1.15rem"
          />
        </Flex>
        <Box
          display={{ base: show ? 'block' : 'none', md: 'flex' }}
          width={{ base: '100%', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          {TOP_NAV_LINKS.map((item) => (
            <TopNavigationItem
              key={item.link}
              link={item.link}
              text={item.text}
              handleHideMobileMenu={() => setShow(false)}
            />
          ))}
        </Box>

        <Box display={{ base: 'none', md: 'block' }} mt="0.5rem" align="center">
          <IconButton
            aria-label="Color Mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FiSun />}
            onClick={toggleColorMode}
            size="lg"
            isRound={true}
            {...iconProps}
          />
        </Box>
      </Flex>
    </Flex>
  )
}
