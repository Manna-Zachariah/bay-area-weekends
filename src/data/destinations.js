import bigSurImage from '../assets/big-sur.jpg';
import santaCruzImage from '../assets/santa-cruz.jpg';
import montereyImage from '../assets/monterey.jpg';
import napaValleyImage from '../assets/napa-valley.jpg';
import halfMoonBayImage from '../assets/half-moon-bay.jpg';
import pointReyesImage from '../assets/point-reyes.jpg';
import sonomaImage from '../assets/sonoma.jpg';
import lakeTahoeImage from '../assets/lake-tahoe.jpg';

const destinations = [
  {
    id: 'big-sur',
    name: 'Big Sur',
    category: 'coast',
    driveTime: 'About 2.5 to 3 hours from San Jose',
    image: bigSurImage,
    alt: 'Rocky cliffs and Bixby Bridge along the Big Sur coastline at sunset',
    description:
      'Big Sur is ideal for dramatic ocean views, iconic roadside stops, and a scenic Highway 1 weekend drive.',
  },
  {
    id: 'santa-cruz',
    name: 'Santa Cruz',
    category: 'coast',
    driveTime: 'About 45 minutes to 1 hour from San Jose',
    image: santaCruzImage,
    alt: 'Coastal cliffs and waves along the Santa Cruz shoreline at sunset',
    description:
      'Santa Cruz offers an easy coastal escape with beaches, casual food spots, and a relaxed surf-town feel.',
  },
  {
    id: 'half-moon-bay',
    name: 'Half Moon Bay',
    category: 'coast',
    driveTime: 'About 1.5 hours from San Jose',
    image: halfMoonBayImage,
    alt: 'Coastal cliffs and waves along Half Moon Bay shoreline',
    description:
      'Half Moon Bay works well for a quieter beach day with cliffside walks, ocean views, and a slower pace.',
  },
  {
    id: 'napa-valley',
    name: 'Napa Valley',
    category: 'wine',
    driveTime: 'About 2 to 2.5 hours from San Jose',
    image: napaValleyImage,
    alt: 'Rows of vineyards in Napa Valley with hills in the background',
    description:
      'Napa Valley is best for wine tasting, slower afternoons, and a polished weekend focused on vineyards and food.',
  },
  {
    id: 'sonoma',
    name: 'Sonoma',
    category: 'wine',
    driveTime: 'About 2 hours from San Jose',
    image: sonomaImage,
    alt: 'Vineyard rows and trees in Sonoma wine country under a clear sky',
    description:
      'Sonoma gives you wine country scenery with a slightly more rustic and laid-back atmosphere than Napa.',
  },
  {
    id: 'monterey',
    name: 'Monterey',
    category: 'nature',
    driveTime: 'About 1.5 hours from San Jose',
    image: montereyImage,
    alt: 'Rocky Monterey coastline with waves and ocean water below the cliffs',
    description:
      'Monterey is a scenic choice for coastal walks, aquarium visits, and a calm weekend near the water.',
  },
  {
    id: 'point-reyes',
    name: 'Point Reyes',
    category: 'nature',
    driveTime: 'About 2.5 hours from San Jose',
    image: pointReyesImage,
    alt: 'Point Reyes lighthouse on rocky cliffs overlooking the ocean',
    description:
      'Point Reyes is a strong pick for windswept viewpoints, rugged shoreline scenery, and a more remote nature feel.',
  },
  {
    id: 'lake-tahoe',
    name: 'Lake Tahoe',
    category: 'nature',
    driveTime: 'About 4 hours from San Jose',
    image: lakeTahoeImage,
    alt: 'Clear blue waters of Lake Tahoe surrounded by forest and mountains',
    description:
      'Lake Tahoe is the farthest option here, but it rewards the drive with mountain views, clear water, and full weekend energy.',
  },
];

export default destinations;