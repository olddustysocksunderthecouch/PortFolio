import profileImage from '../pages/About/assets/profileImage.jpeg'
import digitalImage from '../pages/ProjectsDigital/assets/FindHomes.jpeg'
import physicalImage from '../pages/ProjectsPhysical/assets/hydroponics1.jpeg'
import designImage from '../pages/ProjectsDesign/assets/snowStars.jpg'
import googleDeveloperGroup from '../pages/Community/assets/googleDeveloperGroup.jpg'
import contactImage from '../layout/Header/assets/profileCartoon.jpg'

export const SITE_ORIGIN = 'https://portfolio-a41f9.web.app'
export const SITE_NAME = 'Adrian Bunge Portfolio'

export const SEO_CONTENT = {
  home: {
    title: 'Adrian Bunge | Builder, Founder, Designer in Cape Town',
    metaDescription:
      'Portfolio of Adrian Bunge: software products, design experiments, physical builds, and community projects in Cape Town.',
    ogDescription:
      'Explore Adrian Bunge’s projects across software, design, physical builds, and community initiatives.',
    canonicalPath: '/',
    imageUrl: `${SITE_ORIGIN}${profileImage}`,
  },
  about: {
    title: 'About Adrian Bunge | Product, Engineering, and Community',
    metaDescription:
      'Learn about Adrian Bunge’s path across product, engineering, design, startup leadership, and community building.',
    ogDescription:
      'Read Adrian Bunge’s story from geology to software, startups, and community leadership.',
    canonicalPath: '/about',
    imageUrl: `${SITE_ORIGIN}${profileImage}`,
  },
  projectsDigital: {
    title: 'Digital Projects | Adrian Bunge',
    metaDescription:
      'Selected digital products and software projects by Adrian Bunge, including FindHomes and other practical builds.',
    ogDescription:
      'A collection of digital products and software projects built by Adrian Bunge.',
    canonicalPath: '/projects-digital',
    imageUrl: `${SITE_ORIGIN}${digitalImage}`,
  },
  projectsPhysical: {
    title: 'Physical Projects | Adrian Bunge',
    metaDescription:
      'Hands-on physical projects by Adrian Bunge, including hydroponics systems, carpentry, and maker experiments.',
    ogDescription:
      'Discover physical builds and maker projects by Adrian Bunge.',
    canonicalPath: '/projects-physical',
    imageUrl: `${SITE_ORIGIN}${physicalImage}`,
  },
  projectsDesign: {
    title: 'Design Projects | Adrian Bunge',
    metaDescription:
      'Design and architecture concepts, poster campaigns, and visual projects created by Adrian Bunge.',
    ogDescription:
      'Browse visual design work and architecture concepts from Adrian Bunge.',
    canonicalPath: '/projects-design',
    imageUrl: `${SITE_ORIGIN}${designImage}`,
  },
  community: {
    title: 'Community Work | Adrian Bunge',
    metaDescription:
      'Community initiatives and meetups led by Adrian Bunge, including Indie Hackers Cape Town and other developer groups.',
    ogDescription:
      'See Adrian Bunge’s community work, meetups, and developer initiatives.',
    canonicalPath: '/projects-community',
    imageUrl: `${SITE_ORIGIN}${googleDeveloperGroup}`,
  },
  contact: {
    title: 'Contact Adrian Bunge',
    metaDescription:
      'Get in touch with Adrian Bunge for projects, collaboration, and opportunities in product, software, and design.',
    ogDescription:
      'Reach out to Adrian Bunge to discuss projects, roles, and collaboration opportunities.',
    canonicalPath: '/contact',
    imageUrl: `${SITE_ORIGIN}${contactImage}`,
  },
}
