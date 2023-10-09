export const months = [
    {
    id: "nov2023",
    month: "November",
    path: "/nov2023",
    title: "November 2023",
    sm:'/mobile/nov23.png',
    xl:'/desktop/cards/nov23.png',
    audio: '/audio/audio.mp3'
    
  },
  {
    id: "dec2023",
    month: "December",
    path: "/dec2023",
    title: "December 2023",
    sm:'/mobile/dec23.png',
    xl:'/desktop/cards/dec23.png',
  },
  {
    id: "jan",
    month: "January",
    path: "/jan",
    title: "January 2024",
    sm:'/mobile/jan.png',
     xl:'/desktop/cards/jan.png',
  },
  {
    id: "feb",
    month: "Febuary",
    path: "/feb",
    title: "Febuary 2024",
    sm:'/mobile/feb.png',
    xl:'/desktop/cards/feb.png',

  },
  {
    id: "mar",
    month:'March',
    path:'/mar',
    title: "March 2024",
    sm:'/mobile/mar.png',
    xl:'/desktop/cards/mar.png',
  
   }, 
   {
    id: "apr",
    month:'April',
    path:'/apr', 
    title: "April 2024", 
    sm:'/mobile/apr.png',
    xl:'/desktop/cards/apr.png',

   }, 
   {
    id: "may",
    month:'May',
    path:'/may',
    title: "May 2024",
    sm:'/mobile/may.png',
    xl:'/desktop/cards/may.png',
   
   },
   {
    id: "jun",
    month:'June',
    path:'/jun',
    title: "June 2024",
    sm:'/mobile/jun.png',
    xl:'/desktop/cards/jun.png',
  

   },
   {
    id: "jul",
    month:'July',
    path:'/jul',
    title: "July 2024",
    sm:'/mobile/jul.png',
    xl:'/desktop/cards/jul.png',

   }, 
   {
    id: "aug",
    month:'August',
    path:'/aug',
    title: "August 2024",
    sm:'/mobile/aug.png',
    xl:'/desktop/cards/aug.png',

   }, 
   {
    id: "sep",
    month:'September',
    path:'/sep',
    title: "September 2024",
    sm:'/mobile/sep.png',
    xl:'/desktop/cards/sep.png',

   },
   {
    id: "oct", 
    month:'October',
    path:'/oct',
    title: "October 2024",
    sm:'/mobile/oct.png',
    xl:'/desktop/cards/oct.png',

   },
   {
    id: "nov",
    month: 'November',
    path: '/nov',
    title: "November 2024",
    sm: '/mobile/nov.png',
    xl: '/desktop/cards/nov.png',

   },
   {
    id: "dec",
    month:'December',
    path:'/dec',
    title: "December 2024",
    sm:'/mobile/dec.png',
    xl:'/desktop/cards/dec.png',

   },

]

export const getMonthData = (current) => {
  const index = months.findIndex((months) => months.id === current);

  return {
    current: months[index],
    previous: months[index - 1],
    next: months[index + 1]
  };
};