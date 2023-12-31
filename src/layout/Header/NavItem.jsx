import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Link, Menu, MenuButton, MenuItem, MenuList, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom'

export const TopNavigationItem = ({ handleHideMobileMenu, link, text }) => {
  const navLinkBgHover = useColorModeValue('rgba(0, 0, 0, 0.7)', '#463d3de0')
  const { colorMode } = useColorMode()
  const { pathname } = useLocation()

  return text === 'Projects' ? (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        textDecoration={pathname.includes('projects') ? 'underline' : 'none'}
        activeStyle={{
          background: colorMode === 'light' ? '#000' : '#252424e0',
          color: '#fff',
        }}
        background="none"
        _hover={{ background: navLinkBgHover, color: '#fff' }}
      >
        Projects
      </MenuButton>
      <MenuList>
        <MenuItem
          as="a"
          href="/projects-digital"
          _hover={{ background: navLinkBgHover, color: '#fff' }}
          color={`mode.${colorMode}.color`}
          textDecoration={pathname === '/projects-digital' ? 'underline' : 'none'}
        >
          Digital
        </MenuItem>
        <MenuItem
          as="a"
          href="/projects-physical"
          _hover={{ background: navLinkBgHover, color: '#fff' }}
          color={`mode.${colorMode}.color`}
          textDecoration={pathname === '/projects-physical' ? 'underline' : 'none'}
        >
          Physical
        </MenuItem>
        <MenuItem
          as="a"
          href="/projects-design"
          _hover={{ background: navLinkBgHover, color: '#fff' }}
          color={`mode.${colorMode}.color`}
          textDecoration={pathname === '/projects-design' ? 'underline' : 'none'}
        >
          Design
        </MenuItem>{' '}
        <MenuItem
          as="a"
          href="/projects-community"
          _hover={{ background: navLinkBgHover, color: '#fff' }}
          color={`mode.${colorMode}.color`}
          textDecoration={pathname === '/projects-community' ? 'underline' : 'none'}
        >
          Community
        </MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <Link
      as={NavLink}
      exact
      to={link}
      activeStyle={{
        background: colorMode === 'light' ? '#000' : '#252424e0',
        color: '#fff',
      }}
      borderRadius={{ sm: '5px' }}
      mr={{ sm: '0', md: '3' }}
      mt={{ sm: '2', md: '0' }}
      padding="0.7rem"
      display={{ sm: 'block' }}
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
