import community from './assets/community.jpg'
import onGather from './assets/onGather.jpg'
import letsAddress from './assets/letsAddress.jpg'
import tutorX from './assets/tutorX.jpg'
import FindHomes from './assets/FindHomes.jpeg'
import Ponder from './assets/Ponder.jpeg'
import EightLawsOfPropertyInvesting from './assets/eightLawsOfPropertyInvesting.webp'

export const PROJECT_DATA = [
  {
    title: 'FindHomes',
    desc: 'Real estate data and intelligence for Buyers and Agents. A product that came out of my obsession with finding the best possible investment properties and now it\'s a product I\'m proud to share with the world. I just want to help people make better property decisions they won\'t regret.',
    tech: 'NextJS, Supabase, PostgreSQL, Tailwind',
    image: FindHomes,
    links: [
      { label: 'Website', href: 'https://findhomes.co.za/' },
    ],
  },
  {
    title: '8 Laws of Property Investing',
    desc: 'A book that I wrote about the 8 laws of property investing. Property investment is not guesswork, it is a learnable system. Discover the eight laws that turn confusion into confidence and help you make smarter, data-backed investment decisions.',
    tech: 'Writing, Property Investing, Research',
    image: EightLawsOfPropertyInvesting,
    links: [
      { label: 'Read it here!', href: 'https://book.findhomes.co.za/8laws' },
    ],
  },
  { 
    title: 'Ponder Gratitude',
    desc: 'A daily gratitude journal app. It\'s a simple app that transformed what you\'re grateful for into a beautiful image. I start it because I wondered where we might find meaning and purpose when AI takes over knowledge work. Sadly couldn\'t find a sustainable revenue model.',
    tech: 'React Native, Expo, Supabase, PostgreSQL',
    image: Ponder,
  },
  {
    title: 'Community',
    desc: 'Prodigy Finance has given postgraduate student loans to more than 25 000 student. I lead the team that built the community platform for our students. The platform is used by students to connect with each other, ask questions, and share their experiences. It is also used by the company to share news and events with the students.',
    tech: 'React Native, GatsbyJS, NestJS, PostgreSQL, AWS',
    image: community,
  },
  {
    title: 'onGather',
    desc: 'Born amidst Covid lockdowns, reimagines online gatherings, transforming video calls into memorable experiences. Offering a diverse array of engaging activities and simplifying your planning with streamlined email invites and calendar reminders, OnGather caters to all ages and interests. It integrates effortlessly with video conferencing platforms, fostering deeper connections in the digital space. At OnGather, we\'re not just about passing time, we\'re about making cherished memories, no matter the distance. Dive into OnGather - where distance doesn\'t divide, but strengthens your bonds.',
    tech: 'JavaScript, Node, React, Firebase',
    image: onGather,
  },
  {
    title: 'Lets Address',
    desc: 'An Android app aimed at revolutionizing address verification. Utilizing state-of-the-art geofencing technology, Let\'s Address securely and continuously verifies your place of residence with your permission. In a world where proof of address is becoming increasingly important - for banks, insurers, or government services - We provide a quick, efficient, and reliable solution.',
    tech: 'Android, Java, Kotlin, Google Maps API',
    image: letsAddress,
  },
  {
    title: 'TutorX',
    desc: 'A personalized online tutoring app. We offer one-on-one sessions tailored to your unique learning style, connecting you with certified tutors across various subjects. Our platform features real-time video sessions, interactive whiteboards, and instant homework help, making learning accessible and engaging. Whether you\'re a high school student, a college student, or an adult learner, Learnify is your partner in achieving your learning goals. Experience the future of education with TutorX today!',
    tech: 'Android, Java, JavaScript, Firebase',
    image: tutorX,
  },
]