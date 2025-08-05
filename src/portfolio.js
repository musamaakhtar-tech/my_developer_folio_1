/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Usama",
    title: "Hi, I'm Usama",
    subTitle: "A Software Engineer focused on Software Quality and Testing, with experience in frontend development and cloud essentials.",
  resumeLink:
    "https://drive.google.com/file/d/1Y9ly-Ykk5FQIKgJBTnBWBrtFPvIi7x4q/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/musamaakhtar-tech",
  linkedin: "",
  gmail: "musamaakhtar63@gmail.com",
  facebook: "https://www.facebook.com/musamaakhtar.tech",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FRONTEND & SOFTWARE QUALITY ENTHUSIAST EXPLORING DEVELOPMENT, TESTING, AND CLOUD TOOLS",
  skills: [
    emoji("⚡ Develop interactive and responsive Frontend UIs using HTML, CSS, JavaScript"),
    emoji("⚡ Perform software prototyping and testing with a focus on quality assurance"),
    emoji("⚡ Work with cloud platforms like AWS and basic database management using MySQL")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Microsoft Office",
      fontAwesomeClassname: "fa-brands fa-microsoft"
    }
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Central Punjab, Lahore",
      logo: require("./assets/images/UCP_Logo.png"), // Replace with your actual logo file
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "October 2020 - October 2024",
      desc: "Specialization in Software Quality and Testing with hands-on experience in software development and UI design.",
      descBullets: [
        "Completed projects like NexGen-Arcade focused on gaming community needs",
        "Gained skills in C++, Java, HTML, MySQL, and software testing"
      ]
    },
    {
      schoolName: "Punjab Group of Colleges, Daska",
      logo: require("./assets/images/PGC_Logo.png"), // Replace with your actual logo file
      subHeader: "F.Sc (Pre-Engineering)",
      duration: "September 2017 - March 2019",
      desc: "Focused on mathematics, physics, and foundational computing concepts.",
      descBullets: [
        "Prepared for engineering studies with a strong focus on analytical problem-solving"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "85%" // Strong due to internship & HTML/CSS/JS knowledge
    },
    {
      Stack: "Database & Cloud",
      progressPercentage: "60%" // MySQL and AWS (via certification)
    },
    {
      Stack: "Programming & OOP Concepts",
      progressPercentage: "50%" // Based on C++, Java, Python, and your learning stage
    }
  ],
  displayCodersrank: false // Set to true if you use CodersRank and update your username
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Development Intern",
      company: "CodeAlpha",
      companylogo: require("./assets/images/CodeAlpha_Logo.png"), // Replace with actual logo in your assets folder
      date: "August 2024 – September 2024",
      desc: "Contributed to frontend development projects, enhancing user interfaces and improving component functionality.",
      descBullets: [
        "Worked with HTML, CSS, JavaScript to build and refine UI components",
        "Improved responsiveness and user interaction in web applications"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I BUILT DURING MY DEGREE AND INTERNSHIP",
  projects: [
    {
      image: require("./assets/images/NexGenArcade_Logo.png"), // Add this logo to your assets/images folder
      projectName: "NexGen-Arcade",
      projectDesc: "A gaming store platform developed for the Pakistani gaming community, focusing on UI design, database management, and user engagement.",
      footerLink: [
        {
          name: "View Project (GitHub / Live Link)",
          url: "https://github.com/musamaakhtar-tech/FYP-NexGen-Arcade" // Replace with actual link
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications and trainings that showcase my learning journey and technical growth.",

  achievementsCards: [
    {
      title: "AWS Cloud Technical Essentials",
      subtitle: "Completed this course on Coursera to understand core AWS services and cloud infrastructure basics.",
      image: require("./assets/images/AWS-Logo.png"), // Add a suitable AWS logo to assets/images
      imageAlt: "AWS Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/c8bf18d9ea99e024a05d0f85bc45d134" // Replace with actual link
        }
      ]
    },
    {
      title: "ChatGPT for Beginners",
      subtitle: "Completed ChatGPT training from Great Learning Academy, learning prompt engineering and AI fundamentals.",
      image: require("./assets/images/Chatgpt-Logo.png"), // Add a ChatGPT or OpenAI logo
      imageAlt: "ChatGPT Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.mygreatlearning.com/certificate/AYBUVPCV" // Replace if unique certificate link is available
        }
      ]
    },
    {
      title: "SEO with Squarespace",
      subtitle: "Learned practical SEO strategies using Squarespace via Coursera.",
      image: require("./assets/images/SEO-Logo.png"), // Add an SEO icon or Squarespace logo
      imageAlt: "SEO Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/3HLqn2k1VH4QDs4qPrbngPtK5s9KCVmVg2" // Replace with actual link
        }
      ]
    },
    {
      title: "Amazon Seller Training",
      subtitle: "Completed seller training at E-Global, Sialkot to understand e-commerce fundamentals.",
      image: require("./assets/images/Amazon-Logo.png"), // Add Amazon logo
      imageAlt: "Amazon Certification",
      footerLink: []
    },
    {
      title: "Microsoft Office Management",
      subtitle: "Gained hands-on skills in Word, Excel, and PowerPoint at English Language Club, Sialkot.",
      image: require("./assets/images/Microsoft365-Logo.png"), // Add Microsoft Office logo
      imageAlt: "Microsoft Office Certificate",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+92 346 0305560",
  email_address: "musamaakhtar63@gmail.com", 
  github: "https://github.com/musamaakhtar-tech", // Replace with your actual GitHub username
  linkedin: "",
  gmail: "",
  facebook: "", // Optional: Add your Facebook profile link
  twitter: "",  // Optional: Add if you use Twitter professionally
  instagram: "", // Optional: Add your Instagram if it's relevant
  leetcode: "",  // Optional: Add if you use LeetCode
  stackoverflow: "", // Optional: Add if you answer questions or showcase work here
  medium: "",  // Optional: Add if you write tech blogs
  devto: "",   // Optional: Developer community profile
  display: true // Set false to hide this section
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
