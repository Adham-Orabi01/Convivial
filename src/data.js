import paris from "./assets/paris.jpg";
import madrid from "./assets/madrid.jpg";
import berlin from "./assets/berlin.jpg";
import vienna from "./assets/vienna.jpg";
import london from "./assets/london.jpg";
import rome from "./assets/rome.jpg";

import hotel1 from "./assets/hotel-1.jpg";
import hotel2 from "./assets/hotel-2.jpg";
import hotel3 from "./assets/hotel-3.jpg";
import hotel4 from "./assets/hotel-4.jpg";
import hotel5 from "./assets/hotel-5.jpg";
import hotel6 from "./assets/hotel-6.jpg";
import hotel7 from "./assets/hotel-7.jpeg";
import hotel8 from "./assets/hotel-8.jpg";
import hotel9 from "./assets/hotel-9.jpg";
import hotel10 from "./assets/hotel-10.jpg";
import hotel11 from "./assets/hotel-11.jpg";
import hotel12 from "./assets/hotel-12.jfif";

import transportation from "./assets/transportation.jpg";
import guidence from "./assets/guidance.jpg";
import accomodation from "./assets/accommodation.jpg";
import discover from "./assets/discover.jpg";

import room1 from "./assets/room1.jpg";
import room2 from "./assets/room2.jpg";
import room3 from "./assets/room3.jpg";
import room4 from "./assets/room4.jpg";
import room5 from "./assets/room5.jpg";
import room6 from "./assets/room6.jpg";
import { TbAirConditioning } from "react-icons/tb";
import {
  MdOutlineAirplaneTicket,
  MdOutlineRestaurant,
  MdOutlineWash,
} from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { GiHeatHaze } from "react-icons/gi";
import { FaSpa } from "react-icons/fa6";

export const destinations = [
  {
    id: 1,
    title: "Paris",
    image: paris,
  },
  {
    id: 2,
    title: "Madrid",
    image: madrid,
  },
  {
    id: 3,
    title: "Berlin",
    image: berlin,
  },
  {
    id: 4,
    title: "Vienna",
    image: vienna,
  },
  {
    id: 5,
    title: "London",
    image: london,
  },
  {
    id: 6,
    title: "Rome",
    image: rome,
  },
];

export const hotels = [
  {
    id: 1,
    title: "Le Meurice",
    image: hotel1,
    location: "Paris",
    price: 120,
    rate: 8.9,
    review: "Very Good",
  },
  {
    id: 2,
    title: "The Savoy",
    image: hotel3,
    location: "London",
    price: 115,
    rate: 8.5,
    review: "Very Good",
  },
  {
    id: 3,
    title: "Hotel Sacher Wien",
    image: hotel5,
    location: "Vienna",
    price: 150,
    rate: 9.2,
    review: "Excellent",
  },
  {
    id: 4,
    title: "Hotel de Russie",
    image: hotel7,
    location: "Rome",
    price: 135,
    rate: 8.3,
    review: "Very Good",
  },
  {
    id: 5,
    title: "Hotel Ritz Madrid",
    image: hotel9,
    location: "Madrid",
    price: 100,
    rate: 8.4,
    review: "Very Good",
  },
  {
    id: 6,
    title: "Hotel Adlon Kempinski",
    image: hotel11,
    location: "Berlin",
    price: 170,
    rate: 9.5,
    review: "Excellent",
  },
];

export const services = [
  {
    id: 1,
    title: "Transportation",
    image: transportation,
    description: "We offer the most comfortable transportation",
  },
  {
    id: 2,
    title: "Guidence",
    image: guidence,
    description: "We offer the best guidence for you",
  },
  {
    id: 3,
    title: "Accomodation",
    image: accomodation,
    description: "We offer the most Luxarious and comfortable accomodation ",
  },
  {
    id: 4,
    title: "Discover world",
    image: discover,
    description: "Explore local culture and unforgettable adventures",
  },
];

export const info = [
  {
    id: 1,
    title: "About us",
  },
  {
    id: 2,
    title: "Community Blog",
  },
  {
    id: 3,
    title: "Careers",
  },
  {
    id: 4,
    title: "FAQ",
  },
  {
    id: 5,
    title: "Privacy policy",
  },
  {
    id: 6,
    title: "Terms of service",
  },
];

export const allHotels = [
  {
    id: 1,
    title: "Le Meurice",
    image: hotel1,
    location: "Paris",
    price: 120,
    rate: 8.9,
    review: "Very Good",
  },
  {
    id: 2,
    title: "The Savoy",
    image: hotel3,
    location: "London",
    price: 115,
    rate: 8.5,
    review: "Very Good",
  },
  {
    id: 3,
    title: "Hotel Sacher Wien",
    image: hotel5,
    location: "Vienna",
    price: 150,
    rate: 9.2,
    review: "Excellent",
  },
  {
    id: 4,
    title: "Hotel de Russie",
    image: hotel7,
    location: "Rome",
    price: 135,
    rate: 8.3,
    review: "Very Good",
  },
  {
    id: 5,
    title: "Hotel Ritz Madrid",
    image: hotel9,
    location: "Madrid",
    price: 100,
    rate: 8.4,
    review: "Very Good",
  },
  {
    id: 6,
    title: "Hotel Adlon Kempinski",
    image: hotel11,
    location: "Berlin",
    price: 170,
    rate: 9.5,
    review: "Excellent",
  },
  {
    id: 7,
    title: "Hôtel Plaza Athénée",
    image: hotel2,
    location: "Paris",
    price: 110,
    rate: 8.5,
    review: "Very Good",
  },
  {
    id: 8,
    title: "Claridge's",
    image: hotel4,
    location: "London",
    price: 105,
    rate: 8.2,
    review: "Very Good",
  },
  {
    id: 9,
    title: "Palais Hansen Kempinski Vienna",
    image: hotel6,
    location: "Vienna",
    price: 140,
    rate: 9.1,
    review: "Excellent",
  },
  {
    id: 10,
    title: "The St. Regis Rome",
    image: hotel8,
    location: "Rome",
    price: 125,
    rate: 8.1,
    review: "Very Good",
  },
  {
    id: 11,
    title: "The Principal Madrid",
    image: hotel10,
    location: "Madrid",
    price: 95,
    rate: 8.2,
    review: "Very Good",
  },
  {
    id: 12,
    title: "The Ritz-Carlton, Berlin",
    image: hotel12,
    location: "Berlin",
    price: 160,
    rate: 9.1,
    review: "Excellent",
  },
];

export const filterOptions = [
  {
    id: 1,
    title: "Review Score",
    options: ["Excellent", "Very Good", "Good", "Average", "Bad"],
  },
  {
    id: 2,
    title: "Hotel Theme",
    options: ["Business", "Classic", "Luxury", "Quite", "Standard"],
  },
];

export const rooms = [
  {
    id: 1,
    image: room1,
  },
  {
    id: 2,
    image: room2,
  },
  {
    id: 3,
    image: room3,
  },
  {
    id: 4,
    image: room4,
  },
  {
    id: 5,
    image: room5,
  },
  {
    id: 6,
    image: room6,
  },
];

export const facilities = [
  {
    id: 1,
    title: "Air Conditioning",
    icon: <TbAirConditioning />,
  },
  {
    id: 2,
    title: "Airport Transport",
    icon: <MdOutlineAirplaneTicket />,
  },
  {
    id: 3,
    title: "Gym",
    icon: <CgGym />,
  },
  {
    id: 4,
    title: "Heater",
    icon: <GiHeatHaze />,
  },
  {
    id: 5,
    title: "Restaurant",
    icon: <MdOutlineRestaurant />,
  },
  {
    id: 6,
    title: "Spa & Sauna",
    icon: <FaSpa />,
  },
  {
    id: 7,
    title: "Washer & Dryer",
    icon: <MdOutlineWash />,
  },
];
