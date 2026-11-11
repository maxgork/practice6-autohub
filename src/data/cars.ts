import type { Car } from "@/types/car";
export const cars: Car[] = [
  { id:1,title:"Audi A6 C5",category:"Sedan",level:"Comfort",durationHours:1999,description:"Classic quattro sedan with a 2.8-liter V6 engine."},
  { id:2,title:"BMW 530i E39",category:"Sedan",level:"Premium",durationHours:2002,description:"Sporty executive sedan with balanced handling."},
  { id:3,title:"Mercedes-Benz E320",category:"Sedan",level:"Premium",durationHours:2001,description:"Comfortable executive sedan with a smooth six-cylinder engine."},
  { id:4,title:"Toyota Camry",category:"Sedan",level:"Comfort",durationHours:2018,description:"Reliable everyday sedan with a spacious cabin."},
  { id:5,title:"Toyota Land Cruiser 200",category:"SUV",level:"Premium",durationHours:2016,description:"Full-size SUV with excellent off-road capability."},
  { id:6,title:"Lexus RX 350",category:"SUV",level:"Premium",durationHours:2017,description:"Luxury crossover designed for comfortable travel."},
  { id:7,title:"Honda CR-V",category:"SUV",level:"Comfort",durationHours:2019,description:"Practical family SUV with flexible storage."},
  { id:8,title:"Volkswagen Golf GTI",category:"Hatchback",level:"Comfort",durationHours:2015,description:"Compact performance hatchback."},
  { id:9,title:"Ford Focus",category:"Hatchback",level:"Economy",durationHours:2014,description:"Affordable compact hatchback for city driving."},
  { id:10,title:"Hyundai i30",category:"Hatchback",level:"Economy",durationHours:2020,description:"Modern hatchback with practical features."},
];
export const categories: string[] = Array.from(new Set(cars.map(car => car.category)));
