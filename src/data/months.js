export const months = [
    {
    id: "nov2023",
    month: "November",
    path: "/nov2023",
    title: "November 2023",
    sm:'/mobile/Group 413-nov.jpg',
    xl:'/desktop/nov2023.jpg',
    
  },
  {
    id: "dec2023",
    month: "December",
    path: "/dec2023",
    title: "December 2023",
    sm:'/mobile/Group 412-dec.jpg',
    xl:'/desktop/dec2023.jpg',
  },
  {
    id: "jan",
    month: "January",
    path: "/jan",
    title: "January 2024",
    sm:'/mobile/Group 411-jan.jpg',
    xl:'/desktop/jan2024.jpg',
  },
  {
    id: "feb",
    month: "Febuary",
    path: "/feb",
    title: "Febuary 2024",
    sm:'/mobile/Group 410-feb.jpg',
    xl:'/desktop/feb2024.jpg',

  },
  {
    id: "mar",
    month:'March',
    path:'/mar',
    title: "March 2024",
    sm:'/mobile/Group 409-mar.jpg',
    xl:'/desktop/mar2024.jpg',
  
   }, 
   {
    id: "apr",
    month:'April',
    path:'/apr', 
    title: "April 2024", 
    sm:'/mobile/Group 408-apr.jpg',
    xl:'/desktop/april2024.jpg',

   }, 
   {
    id: "may",
    month:'May',
    path:'/may',
    title: "May 2024",
    sm:'/mobile/Group 407-may.jpg',
    xl:'/desktop/may2024.jpg',
   
   },
   {
    id: "jun",
    month:'June',
    path:'/jun',
    title: "June 2024",
    sm:'/mobile/Group 406-june.jpg',
    xl:'/desktop/june.jpg',
  

   },
   {
    id: "jul",
    month:'July',
    path:'/jul',
    title: "July 2024",
    sm:'/mobile/Group 405-july.jpg',
    xl:'/desktop/july2024.jpg',

   }, 
   {
    id: "aug",
    month:'August',
    path:'/aug',
    title: "August 2024",
    sm:'/mobile/Group 404-aug.jpg',
    xl:'/desktop/august2024.jpg',

   }, 
   {
    id: "sep",
    month:'September',
    path:'/sep',
    title: "September 2024",
    sm:'/mobile/Group 403-sep.jpg',
    xl:'/desktop/sep2024.jpg',

   },
   {
    id: "oct", 
    month:'October',
    path:'/oct',
    title: "October 2024",
    sm:'/mobile/Group 402-oct.jpg',
    xl:'/desktop/oct2024.jpg',

   },
   {
    id: "nov",
    month: 'November',
    path: '/nov',
    title: "November 2024",
    sm: '/mobile/Group 401-nov.jpg',
    xl: '/desktop/nov2024.jpg',

   },
   {
    id: "dec",
    month:'December',
    path:'/dec',
    title: "December 2024",
    sm:'/mobile/Group 400-dec.jpg',
    xl:'/desktop/dec2024.jpg',

   },

]

export const getMonthData = (current) => {
  const index = months.findIndex((month) => month.id === current);

  return {
    current: months[index],
    previous: months[index - 1],
    next: months[index + 1]
  };
};