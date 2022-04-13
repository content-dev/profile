// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Armando",
  middleName: "",
  lastName: "Hernandez",
  message: "Passionate Software Developer with 16+ years of experience, including Telecom, Banking, and eLearning projects. Skilled in back-end development and instructional design. Seeking to boost my expertise on different fields of application development.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/content-dev",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/armando-hdz/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/armando-hdz-01.png"),
  imageSize: 375,
  message:
    "My name is Armando Hernandez. I'm a practical and versatile Software Engineer with a wide variety of professional experiences, which includes different technical positions. Excellent team player with in-depth knowledge of instructional design, development tools and languages. ",
  
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "content-dev", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/armando-hdz-01.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/armando-hdz-01.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "Oracle Cloud", value: 65 },
    { name: "JavaScript", value: 85 },
    { name: "Node.js", value: 80 }, 
    { name: "Helidon", value: 65 },
    { name: "Spring", value: 50 },
    { name: "React", value: 35 },
    { name: "Data Structures", value: 75 },    
    { name: "HTML/CSS", value: 70 },
    { name: "Markdown", value: 98 },    
    { name: "Git", value: 85 },
    { name: "MySQL", value: 85 },
    { name: "Linux", value: 92 },
	  { name: "Camtasia TechSmith", value: 95 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 100 },
    { name: "Teamworking", value: 100 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 95 },
    { name: "Creativity", value: 80 },
    { name: "Self-education", value: 90 },
    { name: "Collaboration", value: 95 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Instructional Design opportunities! If you know of any positions available feel free to email me at",
  email: "armando.hdz.b@gmail.com",
};

const experiences = {
  show: true,
  heading: "Professional Experience",
  data: [
    {
      role: 'Learning Solutions Architect',// Here Add Company Name
      companylogo: require('../assets/img/oracle-01.png'),
      date: 'November 2019 – Present',
    },
	{
      role: 'Cloud User Assistance Developer',// Here Add Company Name
      companylogo: require('../assets/img/oracle-01.png'),
      date: 'November 2014 – November 2019',
    },
	{
      role: 'Software Developer',// Here Add Company Name
      companylogo: require('../assets/img/itexico-01.png'),
      date: 'December 2013 – November 2014',
    },	
	{
      role: 'Software Developer',// Here Add Company Name
      companylogo: require('../assets/img/tcs-01.png'),
      date: 'October 2008 – December 2013',
    },	
    {
      role: 'Java Software Developer',
      companylogo: require('../assets/img/ibm-01.png'),
      date: 'August 2006 – December 2013',
    },
  ]
}

const videos = {
  show: true,
  heading: "Produced Videos",
  data: [
    {
      name: 'Purchase and Schedule an Exam',
      videoImg: require('../assets/img/video-01.png'),
      videoUrl: 'https://players.brightcove.net/2985902027001/default_default/index.html?videoId=6300952000001',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video describes the process to purchase a certification exam and schedule it. It was created based on static images with effects.',
      year: '2022',
    },
    {
      name: 'Requesting a Name Change ',
      videoImg: require('../assets/img/video-02.png'),
      imageSize: 150,
      videoUrl: 'https://players.brightcove.net/2985902027001/default_default/index.html?videoId=6279380817001',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video shows how to change the profile name in order to change it from the certificate. It was created based on static images with effects.',
      year: '2021',
      },
    {
      name: 'Requesting Merge of Profiles',
      videoImg: require('../assets/img/video-03.png'),
      videoUrl: 'https://players.brightcove.net/2985902027001/default_default/index.html?videoId=6279379375001',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video describes the process of merging two accounts of the same user to merge certifications. It was created based on static images with effects.',
      year: '2021',
      },	
    {
      name: 'Logging a Service Request Ticket',
      videoImg: require('../assets/img/video-04.png'),
      videoUrl: 'https://players.brightcove.net/2985902027001/default_default/index.html?videoId=6279380650001',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video shows how to log a service request ticket. It was created based on static images with effects.',
      year: '2021',
    },	
    {
      name: 'Registering for an Exam',
      videoImg: require('../assets/img/video-05.png'),
      videoUrl: 'https://players.brightcove.net/2985902027001/default_default/index.html?videoId=6271307221001',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video describes the process of registering for a certification exam and the scheduling process. It was created based on static images with effects.',
      year: '2021',
    },
    {
      name: 'Oracle University Explorer Program',
      videoImg: require('../assets/img/video-06.png'),
      videoUrl: 'https://players.brightcove.net/2985902027001/default_default/index.html?videoId=6179064351001',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video shows you the benefits of the Explorer Program of Oracle University. It was created based on small chunks of different videos and static images with effects.',
      year: '2021',
    },
    {
      name: 'OAuth Introduction & Terminology',
      videoImg: 'https://img.youtube.com/vi/zEysfgIbqlg/2.jpg',
      videoUrl: 'https://youtu.be/zEysfgIbqlg',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video gives you an introduction and explanation about the main used terms in the OAuth standard.',
      year: '2017',
    },    
    {
      name: 'OAuth Grant Types',
      videoImg: 'https://img.youtube.com/vi/1ZX7554l8hY/1.jpg',
      videoUrl: 'https://youtu.be/1ZX7554l8hY',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video gives you an intruduction about the two-legged and three-legged flows, as well as the client types used in these flows.',
      year: '2017',
    }, 
    {
      name: 'Implementing APIs in Oracle API Platform Cloud Service',
      videoImg: 'https://img.youtube.com/vi/nkVXlcqSUIU/2.jpg',
      videoUrl: 'https://youtu.be/nkVXlcqSUIU',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video shows you how to implement APIs in Oracle API Platform Cloud Service by adding the API Request and Service Request endpoints to the managed API.',
      year: '2017',
    },    
    {
      name: 'Managing API Deployments in Oracle API Platform Cloud Service',
      videoImg: 'https://img.youtube.com/vi/kg02Y0LjC9c/1.jpg',
      videoUrl: 'https://youtu.be/kg02Y0LjC9c',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video shows you how to manage API deployments in Oracle API Platform Cloud Service by redeploying an existing API.',
      year: '2017',
    },    
    {
      name: 'Configure Rate Limiting, Header Validation and Routing Policies',
      videoImg: 'https://img.youtube.com/vi/aAqUqnoEjwA/2.jpg',
      videoUrl: 'https://youtu.be/aAqUqnoEjwA',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video shows you how to configure API Rate Limiting, Header Validation and Resource Based Routing policies in Oracle API Platform Cloud Service.',
      year: '2017',
    },    
    {
      name: 'Configure Key Validation and Header Based Routing Policies',
      videoImg: 'https://img.youtube.com/vi/HUJcEfLIGI4/1.jpg',
      videoUrl: 'https://youtu.be/HUJcEfLIGI4',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video shows you how to configure Key Validation and Header Based Routing policies in Oracle API Platform Cloud Service.',
      year: '2017',
    },     
    
    
    {
      name: 'Improving Performance and Scalability with In-Memory SOA',
      videoImg: 'https://img.youtube.com/vi/j2SYyxp1hoE/0.jpg',
      videoUrl: 'https://youtu.be/j2SYyxp1hoE',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video shows you how to improving performance and scalability with In-Memory SOA in Oracle SOA Suite 12.2.1',
      year: '2016',
    },    
    {
      name: 'SOA Composite Instance Patching',
      videoImg: 'https://img.youtube.com/vi/I5zOslc_bwE/3.jpg',
      videoUrl: 'https://youtu.be/I5zOslc_bwE',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video shows you the Composite Instance Patching new feature in Oracle SOA Suite 12.2.1, which enables you to apply compatible changes in a running instance of a composite application.',
      year: '2016',
    },    
    {
      name: 'FTP to ERP Integration use case',
      videoImg: 'https://img.youtube.com/vi/_uv_1cAhSLo/0.jpg',
      videoUrl: 'https://youtu.be/_uv_1cAhSLo',
      task: 'Storyboarding, Video Edition & Animations',
      description: 'This video shows you how to Orchestrate data from a secure FTP endpoint to ERP Cloud by using the orchestration pattern in Oracle Integration.',
      year: '2016',
    },    
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, videos };
