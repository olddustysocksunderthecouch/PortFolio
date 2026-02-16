import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Link, Menu, MenuButton, MenuItem, MenuList, useColorMode } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const TopNavigationItem = ({ handleHideMobileMenu, link, text }) => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(true)
  const { colorMode } = useColorMode()
  const { pathname } = useLocation()
  const navLinkBgHover = colorMode === 'light' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(148, 163, 184, 0.26)'
  const navActiveBg = colorMode === 'light' ? '#000' : 'mode.dark.tagBG'
  const projectLinks = [
    { href: '/projects-digital', label: 'Digital' },
    { href: '/projects-physical', label: 'Physical' },
    { href: '/projects-design', label: 'Design' },
    { href: '/projects-community', label: 'Community' },
  ]

  return text === 'Projects' ? (
    <>
      <Box display={{ base: 'block', md: 'none' }}>
        <Button
          onClick={() => setIsProjectsOpen((prev) => !prev)}
          rightIcon={<ChevronDownIcon transform={isProjectsOpen ? 'rotate(180deg)' : 'rotate(0deg)'} />}
          borderRadius={{ base: '5px' }}
          mt={{ base: '2', md: '0' }}
          padding="0.7rem"
          width="100%"
          justifyContent="space-between"
          background="none"
          color={`mode.${colorMode}.color`}
          _hover={{ background: navLinkBgHover, color: '#fff' }}
          textDecoration={pathname.includes('projects') ? 'underline' : 'none'}
        >
          Projects
        </Button>
        {isProjectsOpen && (
          <Box pl="1rem" mt="0.25rem">
            {projectLinks.map((projectLink) => (
              <Link
                key={projectLink.href}
                as={NavLink}
                exact
                to={projectLink.href}
                activeStyle={{
                  background: navActiveBg,
                  color: '#fff',
                }}
                borderRadius={{ base: '5px' }}
                mt={{ base: '1', md: '0' }}
                padding="0.7rem"
                display="block"
                color={`mode.${colorMode}.color`}
                _hover={{
                  background: navLinkBgHover,
                  color: '#fff',
                }}
                onClick={handleHideMobileMenu}
                textDecoration={pathname === projectLink.href ? 'underline' : 'none'}
              >
                {projectLink.label}
              </Link>
            ))}
          </Box>
        )}
      </Box>

      <Box display={{ base: 'none', md: 'block' }}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            textDecoration={pathname.includes('projects') ? 'underline' : 'none'}
            activeStyle={{
              background: navActiveBg,
              color: '#fff',
            }}
            background="none"
            _hover={{ background: navLinkBgHover, color: '#fff' }}
          >
            Projects
          </MenuButton>
          <MenuList>
            {projectLinks.map((projectLink) => (
              <MenuItem
                key={projectLink.href}
                as="a"
                href={projectLink.href}
                _hover={{ background: navLinkBgHover, color: '#fff' }}
                color={`mode.${colorMode}.color`}
                textDecoration={pathname === projectLink.href ? 'underline' : 'none'}
              >
                {projectLink.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </>
  ) : (
    <Link
      as={NavLink}
      exact
      to={link}
      activeStyle={{
        background: navActiveBg,
        color: '#fff',
      }}
      borderRadius={{ base: '5px' }}
      mr={{ base: '0', md: '3' }}
      mt={{ base: '2', md: '0' }}
      padding="0.7rem"
      display={{ base: 'block' }}
      color={`mode.${colorMode}.color`}
      _hover={{
        background: navLinkBgHover,
        color: '#fff',
      }}
      onClick={handleHideMobileMenu}
      textDecoration={pathname === link ? 'underline' : 'none'}
    >
      {text}
    </Link>
  )
}
