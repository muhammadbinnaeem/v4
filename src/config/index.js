module.exports = {
  siteTitle: 'Muhammad Bin Naeem | Software Engineer',
  siteDescription:
    'Muhammad Bin Naeem is a web developer based in Boston, MA who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Muhammad Bin Naeem, Muhammad,Bin, Naeem, mbinnaeem, software engineer, front-end engineer, web developer, javascript, karachi, Pakistan, react, react-native, cordova, php, docker, graphql',
  siteUrl: 'https://muhammadbinnaeem.github.io',
  siteLanguage: 'en_US',

  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Muhammad Bin Naeem',
  location: 'karachi, Pakistan',
  email: 'mbinnaeem20@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/muhammadbinnaeem/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/muhammadbinnaeem/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7/',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mbinnaeem/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mbinnaeem',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@mbinnaeem',
  // googleAnalyticsID: 'UA-45666519-2',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#F1D537',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
