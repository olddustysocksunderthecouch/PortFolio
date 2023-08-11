import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
} from 'react-icons/fa'

export const SITE_CONFIG = {
  copyright: `Copyright © ${new Date().getFullYear()} Adrian Bunge. All Rights Reserved.`,
  author: {
    name: 'Adrian Bunge',
    accounts: [
      {
        url: 'https://github.com/olddustysocksunderthecouch',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />,
      },
      {
        url: 'https://twitter.com/apbunge',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />,
      },
      {
        url: 'https://www.linkedin.com/in/adrianbunge/',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />,
      },
      {
        url: 'https://stackoverflow.com/users/6551566/cachemeoutside',
        label: 'Stack Overflow Account',
        type: 'stack-overflow',
        icon: <FaStackOverflow />,
      },
    ],
  },
}

