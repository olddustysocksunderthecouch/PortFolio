import React, { useState } from 'react'
import { Box, Flex, Avatar, IconButton, useColorMode, Link, useColorModeValue } from '@chakra-ui/react'
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
  const navLinkBg = useColorModeValue('gray.50', 'gray.800')
  const navLinkBgHover = useColorModeValue('rgba(0, 0, 0, 0.7)', '#463d3de0')

  return (
    <Flex
      position="fixed"
      as="nav"
      alignContent="center"
      width={'100%'}
      padding="1.5rem"
      boxShadow="sm"
      backgroundColor={navLinkBg}
      justifyContent={{ sm: 'stretch', md: 'center' }}
      zIndex={10}
    >
      <Flex justifyContent={'stretch'} width={{ sm: '100%', md: '52rem' }} flexDirection={{ sm: 'column', md: 'row' }}>
        <Flex align="center" justifyContent="space-between" mr={{ md: '16' }} width={{ sm: '100%', md: '8' }}>
          <Avatar size="lg" src={profileCartoon} />
          <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
            <FiMenu fontSize="2.5rem" color={colorMode === 'light' ? '#000' : '#fff'} />
          </Box>
        </Flex>
        <Box
          display={{ sm: show ? 'block' : 'none', md: 'flex' }}
          width={{ sm: '100%', md: 'auto' }}
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

        <Box display={{ sm: 'none', md: 'block' }} mt="0.5rem" align="center">
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
