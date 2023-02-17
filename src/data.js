import tourImage1 from './images/tour-1.jpeg'
import tourImage2 from './images/tour-2.jpeg'
import tourImage3 from './images/tour-3.jpeg'
import tourImage4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, name: 'home', scrollTo: '#home' },
  { id: 2, name: 'about', scrollTo: '#about' },
  { id: 3, name: 'services', scrollTo: '#services' },
  { id: 4, name: 'tours', scrollTo: '#tours' },
]

export const socials = [
  { id: 1, icon: 'fab fa-facebook', href: 'www.facebook.com' },
  { id: 2, icon: 'fab fa-twitter', href: 'www.twitter.com' },
  { id: 3, icon: 'fab fa-squarespace', href: 'www.facebook.com' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    img: tourImage1,
    title: 'Tibet Adventure',
    date: 'august 26th, 2020',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    img: tourImage2,
    title: 'Best of Java',
    date: 'october 1th, 2020',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    img: tourImage3,
    title: 'Explore Hong Kong',
    date: 'september 15th, 2020',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Hong Kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    img: tourImage4,
    title: 'Kenya Highlights',
    date: 'December 5h, 2020',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Kenya',
    duration: 20,
    cost: 3300,
  },
]
