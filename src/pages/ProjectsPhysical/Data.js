import indieHackers from './assets/indieHackers.webp'
import garden from './assets/garden.jpeg'
import garden2 from './assets/garden2.jpg'
import garden3 from './assets/garden3.jpg'
import garden4 from './assets/garden4.jpeg'
import woodTurning from './assets/woodTurning.jpg'
import sayJa from './assets/sayJa.jpeg'
import sayJa2 from './assets/sayJa2.jpg'
import carpentry from './assets/carpentry.jpg'
import carpentry2 from './assets/carpentry2.jpeg'
import carpentry3 from './assets/carpentry3.jpg'
import hydroponics1 from './assets/hydroponics1.jpeg'
import hydroponics2 from './assets/hydroponics2.jpeg'
import hydroponics3 from './assets/hydroponics3.jpeg'
import { Text } from '@chakra-ui/react'

export const PROJECT_DATA = [

  {
    title: 'Hydroponics!',
    desc: 'Over the last few months I\'ve built four hydroponics systems to grow my own food. I\'ve tried dutch bucket, NFT (Nutrient Film Technique), rain gutter grow system and Kratky. I love how much faster plants grow in a hydroponics system than in a traditional garden. There\'s nothing like harvesting and eating a cucumber from your own garden! ',
    images: [{ original: hydroponics1 }, { original: hydroponics2 }, { original: hydroponics3 }],
  },
  {
    title: 'Garden & Watering System',
    desc: (
      <Text>
        Gardening and growing my own food brings me an incredible amount of joy. I also love automating things. So I
        built a weather forecast controlled watering system that always ensures my plants get the right amount of water.
        <br />
        <br />
        To help my seeds grow during the cold Cape Town winter I also build a temperature controlled seedling box.
      </Text>
    ),
    images: [{ original: garden }, { original: garden2 }, { original: garden3 }, { original: garden4 }],
  },
  {
    title: 'Carpentry',

    desc: (
      <Text>
        My grandfather was a carpenter and started large timber door factory. I used walk through the factory with him
        and he taught me how to work with wood. I love the smell of freshly cut wood and the feeling of creating
        something with my hands. I hope that one day have a small furniture making business of my own.
        <br />
        <br />
        My most recent projects include a set of 3 couches built out of pallets, a tv stand with hidden wheels, a
        standing desk and a set of wooden bowls.
      </Text>
    ),
    images: [{ original: carpentry }, { original: woodTurning }, { original: carpentry2 }, { original: carpentry3 }],
  },
  {
    title: 'Say Ja Cordials',
    // eslint-disable-next-line quotes
    desc: (
      <Text>
        Given the rate of inflation, maintaining my fruit juice addition became rather expensive. So I thought why not
        start my own small juice company! <br />
        <br /> It wasn't wildly successful but the it broken even and I got to drink as much juice as I wanted!
      </Text>
    ),
    images: [{ original: sayJa }, { original: sayJa2 }],
  },
]
