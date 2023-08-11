import { Link, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom'

export const TopNavigationItem = ({ handleHideMobileMenu, link, text }) => {
  const navLinkBgHover = useColorModeValue('rgba(0, 0, 0, 0.7)', '#463d3de0')
  const { colorMode } = useColorMode()
  const { pathname } = useLocation()

  return (
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
