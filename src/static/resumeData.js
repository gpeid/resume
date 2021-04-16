import { array, string } from "prop-types"

export const contactLinks = [
  {
    name: "email",
    url: "ghdiep@gmail.com",
  },
  {
    name: "website",
    url: "https://gpeid.github.io/",
  },
  {
    name: "github",
    url: "https://github.com/gpeid",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/ghdiep/",
  },
]

// object = {
//   position: string,
//   company: string,
//   stack: array[string],
//   employment_period_from: string,
//   employment_period_to: string,
//   work_list: array[string],
//   highlights: array[string],
// }

export const experience = [
  {
    position: "Software Developer",
    company: "Booz Allen Hamilton",
    stack: [
      "JavaScript",
      "React",
      "Redux",
      "Leaflet",
      "Azure Maps",
      "SQL",
      "Gulp",
      "SASS",
      "Bootstrap",
      "PatternLab",
    ],
    employment_period_from: "Jan. 2018",
    employment_period_to: "Present",
    work_list: [
      "Set up Pattern Lab system to lay the foundation for rapid development of UI components in Drupal",
      "Created processes for automating end-to-end development of custom themes on Drupal using Gulp",
      "Collaborated with DevOps to create technical processes to embed React applications in Drupal for continuous integration and deployment",
      "Develop and maintain features for a React based search tool, dashboard and multipage form",
      "Develop solutions for a map based visual tool using React and Azure Maps",
      "Spoke at program wide React knowledge share and project showcase event",
      "Upgrade a legacy AngularJS codebase to latest stable version",
      "Mentor junior developers within the team and in the program",
      "Hold roles in different projects simultaneously assisting in the delivery of quick turnover projects",
      "Continuously gaining knowledge of new technologies and best practices",
    ],
  },
  {
    position: "Software Developer",
    company: "CuriosityStream",
    stack: [
      "JavaScript",
      "AngularJS",
      "Jade",
      "Node",
      "Gulp",
      "SQL",
      "SASS",
      "Bootstrap",
    ],
    employment_period_from: "Oct. 2015",
    employment_period_to: "Dec. 2017",
    work_list: [
      "Developed and maintained a lead generating site built on Angular, Jade and Gulp",
      "Developed an administrative dashboard built on Angular that allowed internal users to organize information using CRUD (Create, Read, Update, Delete) operations",
      "Liaison for help desk and technical team",
      "Executed database changes based on customer requests",
    ],
  },
  {
    position: "Web Developer",
    company: "New Target",
    stack: [
      "Drupal",
      "WordPress",
      "SASS",
      "LESS",
      "Bootstrap",
      "JavaScript",
      "Gulp",
    ],
    employment_period_from: "Sep. 2014",
    employment_period_to: "Oct. 2015",
    work_list: [
      "Developed custom themes on Drupal 7’s using Omega",
      "Created responsive themes for Drupal and WordPress and other platforms using Bootstrap, SASS, and LESS",
      "Created prototypes using Bootstrap",
      "Developed rich UI experiences using JavaScript and jQuery",
    ],
  },
  {
    position: "Web Developer",
    company: "Blue Corona",
    stack: ["Drupal", "WordPress", "SASS", "Bootstrap", "JavaScript", "Gulp"],
    employment_period_from: "Aug. 2011",
    employment_period_to: "Aug. 2014",
    work_list: [
      "Developed and maintained websites built on a variety of platforms including WordPress and Drupal for various local and national businesses, working closely with marketing and design teams",
    ],
  },
  {
    position: "Freelance Software Developer",
    company: "Various local companies",
    stack: [
      "JavaScript",
      "React",
      "GatsbyJS",
      "NextJS",
      "Redux",
      "AngularJS/Angular",
      "SASS",
      "Bootstrap",
      "MaterialUI",
      "Materialize",
      "Tailwind CSS",
      "Semantic UI",
      "UIKit",
      "Gulp",
      "SQL",
      "Drupal",
      "WordPress",
    ],
    employment_period_from: "Aug. 2011",
    employment_period_to: "Present",
    work_list: [
      "Design and develop solutions for small businesses in the DC, Maryland, Virginia area",
    ],
  },
]

// object = {
//   degree: string,
//   school: string,
//   attendance_period_from: number,
//   attendance_period_to: number,
// }

export const education = [
  {
    degree: "Bachelors of Science, Information Systems",
    school: "University of Maryland, Baltimore County",
    attendance_period_from: 2005,
    attendance_period_to: 2010,
  },
]
