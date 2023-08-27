import snowStars from './assets/snowStars.jpg'
import snowStars2 from './assets/snowStars2.jpg'
import snowStars3 from './assets/snowStars3.jpg'
import dryJokes from './assets/dryJokes.jpeg'
import dryJokes2 from './assets/dryJokes2.jpeg'
import dryJokes3 from './assets/dryJokes3.jpeg'
import dryJokes4 from './assets/dryJokes4.jpg'
import mlf from './assets/mlf.jpg'
import mlf2 from './assets/mlf2.jpg'
import mlf3 from './assets/mlf3.jpg'
import mlf4 from './assets/mlf4.jpg'
import container0 from './assets/container0.jpg'
import container from './assets/container.jpeg'
import container2 from './assets/container2.jpeg'
import container3 from './assets/container3.png'
import container4 from './assets/container4.png'
import { Text } from '@chakra-ui/react'

export const PROJECT_DATA = [
  {
    title: 'Accommodation for Digital Nomads',
    desc: (
      <Text>
        Architecture needs to be mindful of remote workers & digital nomads. I'm currently working on a concept for
        cottages that can be placed in remote locations. The apartments will be designed to be comfortable and
        functional for remote workers.
      </Text>
    ),
    images: [{ original: snowStars }, { original: snowStars2 }, { original: snowStars3 }],
  },
  {
    title: 'Container Apartments',
    desc: 'A student accommodation built out of 40 foot shipping containers. They were designed to be modular and easy to transport so that they could be setup on vacant land in the city and moved when the land owner wanted to develop the land. Unfortunately the project never got out of the concept phase.',
    images: [
      { original: container0 },
      { original: container },
      { original: container2 },
      { original: container3 },
      { original: container4 },
    ],
  },
  {
    title: 'Multi-Lingual Fam',
    desc: (
      <Text>
        Multi-Lingual Fam was an initiative aimed at creating more awareness for the lesser spoken South African
        official languages. We provided daily words or phrases in one of the 11 official South African languages,
        accompanied by an English translation. These posters were initially displayed at the main bus stop and a week
        later at a different campus. The words and phrases were selected for their immediate relevance, covering topics
        like exams, weather, flirting (while emphasizing anti-rape culture), and current activism campaigns. We always
        tried to encourage interaction on the posters thought innovative ideas. Our goal was to offer an alternative to
        English and foster a more inclusive university environment.
      </Text>
    ),
    images: [{ original: mlf }, { original: mlf2 }, { original: mlf3 }, { original: mlf4 }],
  },
  {
    title: 'Dry Jokes',
    desc: 'This was a poster campaign aimed an raising awareness about the 2017 drought in the Western Cape. The posters were designed to be funny and while encouraging people to save water. They were displayed all over the university campus and surrounding suburbs.',
    images: [{ original: dryJokes }, { original: dryJokes2 }, { original: dryJokes3 }, { original: dryJokes4 }],
  },
]
