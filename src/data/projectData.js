export const sectionOrder = ["technical", "research", "digital", "presentations"];

export const projectSections = {
  research: {
    heading: "Research and Development",
    items: [
      {
        id: "lockheed",
        label: "Research with Lockheed Martin",
        lines: [
          "Gaze adaptive interactions and user interfaces in AR with gaze tracking visualizations",
          "Research and design of new methods for LMCO to utilize gaze tracking to improve the design and user experience of AR applications.",
          "Developed in Unity with OpenXR for use with Hololens 2.",
          "Fall 2023-Spring 2024",
        ],
        link: null,
      },
      {
        id: "ismar2024",
        label: "Submission to ISMAR 2024",
        lines: [
          "Scoping review with dynamic topic modeling of 360-degree video applications areas",
          "Fall 2023-May 2024",
        ],
        link: null,
      },
      {
        id: "boardingring",
        label: "Research with Boarding Ring",
        lines: [
          "Evaluating cybersickness reduction techniques",
          "Working alongside leadership at Boarding Ring to evaluate Seenetic VR, their solution for cybersickness in Virtual Reality.",
          "Compiled publically available 360-degree videos for automatic playback and data collection in Unity for use with Meta Quest Pro.",
          "Summer-Fall 2023",
        ],
        link: null,
      },
      {
        id: "ieeevr2024",
        label: "IEEEVR 2024 Presented Poster",
        lines: [
          "Physical locomotion techniques and presence in virtual reality",
          "Responsible for (1) user study design to evaluate performance metrics of two locomotion methods (Redirected Walking and Virtuix Omni) and (2) virtual museum experience which served as experiment stimuli in Unreal Engine 4 for use with HTC Vive Cosmos.",
          "Fall 2021-Spring 2022",
        ],
        link: { text: "Publication Link Coming Soon", href: null },
      },
      {
        id: "ismar2022",
        label: "ISMAR 2022 Short Paper",
        lines: [
          "Cross Reality interaction methods user study with Matt Gottsacker",
          "As a team, designed and conducted a user study to evaluate the effect of Matt's interruption cue prototype. Designed a theoretical yet ecological valid scenario to test function and gather user attitudes towards the interactions.",
          "CAP 6919 Fall 2021",
        ],
        link: { text: "Publication Link", href: "https://ieeexplore.ieee.org/abstract/document/9974530" },
      },
    ],
  },
  digital: {
    heading: "Digital Experiences",
    items: [
      {
        id: "spaceinvaders",
        label: "Typescript Game",
        lines: [
          "Space Invaders",
          "Learning typescript through implementing a space invaders style cat game",
          "Summer 2026",
        ],
        link: { text: "Project Link", href: "" },
      },
      {
        id: "eyespy",
        label: "360-Degree Video concept",
        lines: [
          '"Eye Spy"',
          "Testing eye spy concept to use for a research project comparing monoscopic and steroscopic 360-degree video",
          "Fall 2023",
        ],
        link: { text: "Project Link", href: "https://www.youtube.com/playlist?list=PLNRs9nCboNSSzjFt99xWhDz3sNMNBA5gP" },
      },
      {
        id: "snapchat-halloween",
        label: "Snapchat AR Lens",
        lines: [
          "Halloween Party Lens",
          "Designed in Canva, developed in Lens Studio",
          "October 2023",
        ],
        link: { text: "Project Link", href: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=86d8441d99a84425be2f9372ee6e17ea&metadata=01" },
      },
      {
        id: "snapchat-siggraph",
        label: "Snapchat AR Lens",
        lines: [
          "SIGGRAPH 2023 T-Shirt AR Lens with Dr. Mark Billinghurst",
          "Allowed conference attendees to virtually try on T-shirts, hats, and pins from previous iterations of the conference in honor of the 50th anniversary of SIGGRAPH.",
          "Developed in Lens Studio.",
          "Summer 2023",
        ],
        link: { text: "Project Link", href: "https://s2023.siggraph.org/presentation/?id=histc_140&sess=sess422" },
      },
      {
        id: "vr-dining",
        label: "VR Experience",
        lines: [
          "Virtual Reality Dining Room Experience",
          "Developed with Unity and OpenXR for use with HP Omnicept.",
          "CAP 5115 Spring 2023",
        ],
        link: { text: "Project Link", href: "https://www.youtube.com/playlist?list=PLNRs9nCboNSQZKt2KeMqN7Eu3ymWBUPpq" },
      },
    ],
  },
  presentations: {
    heading: "Presentations and Speaking Opportunities",
    items: [
      {
        id: "ncwit-panel",
        label: "Invited Panelist",
        lines: [
          '"How AI and Metaverse will impact our future"',
          "2023 Central Fl NCWIT Aspirations in Computing Award Ceremony",
          "April 15, 2023",
        ],
        link: { text: "Program Link", href: "https://stem.ucf.edu/wp-content/uploads/2023/04/2023-NCWIT-Aic-Program-Full-1.pdf" },
      },
      {
        id: "columbia-presentation",
        label: "Research Presentation",
        lines: [
          '"Building a Successful Imaging Project in the Digital Humanities"',
          "History and Literature Master's Program, Columbia University",
          "Paris, France",
          "May 17, 2019",
        ],
        link: { text: "Program Link", href: "https://globalcenters.columbia.edu/sites/default/files/content/Paris/Publications/digital%20humanities.pdf" },
      },
    ],
  },
  technical: {
    heading: "Technical Experience",
    accentFirst: true,
    items: [
      {
        id: "lmco",
        label: "Embedded Software Engineer",
        lines: [
          "Lockheed Martin MFC, Orlando, FL",
          "(1) Delivered safety-critical C++ components under millisecond-level real-time constraints in an embedded Linux environment; designed and executed HIL test frameworks and presented compliance results to stakeholders.",
          "(2) Served as Scrum Master for a 9-person team across PI planning and sprint ceremonies.",
          "July 2024-May 2026",
        ],
        link: null,
      },
      {
        id: "varlab",
        label: "Graduate Research Assistant",
        lines: [
          "VARLAB - University of Central Florida, Orlando, FL",
          "(1) Led delivery of a component-based AR UI SDK in Unity, architecting a hierarchical scene graph component system for gaze-adaptive HoloLens 2 interfaces; optimized rendering against strict memory and compute budgets using C#, Unity, and OpenXR.",
          "(2) Ported a VR locomotion system from Unity to Unreal Engine 4 (C++, Blueprint), managing scene graph hierarchy and asset streaming to meet millisecond-level latency constraints on a high-polygon environment; published at IEEEVR 2024.",
          "(3) Independently drove peer-reviewed research projects end-to-end, published at IEEEVR and ISMAR — top international venues in the field.",
          "August 2020-May 2024",
        ],
        link: null,
      },
      {
        id: "deltav",
        label: "Software Engineer (Contractor)",
        lines: [
          "Delta V Innovations, Cincinatti, OH (remote)",
          "(1) Invited to join the development team after successful delivery of a 12-week senior design project",
          "(2) Developed and optimized user-facing features for a physics-based 3D visualization tool in C++ and Qt, collaborating with a distributed agile team on real-time data rendering and UI performance.",
          "May 2020-May 2021",
        ],
        link: null,
      },
      {
        id: "ge",
        label: "Associate IT Systems Analyst",
        lines: [
          "GE Appliances, Louisville, KY",
          "(1) Built a cross-platform mobile app to monitor IoT device activity using Cordova, JavaScript, and AWS IoT Core, deployed for use by internal engineering teams",
          "(2) Coordinated the sunset of two internal business applications, managing stakeholder communication and transition timelines",
          "May 2019-July 2019",
        ],
        link: null,
      },
      {
        id: "dri",
        label: "Undergraduate Research Assistant",
        lines: [
          "Digital Restoration Initiative, University of Kentucky, Lexington, KY",
          "(1) Developed an automatic XML metadata collection and delivery process to solve a long-standing issue with the existing Virtual Unwrapping pipeline",
          "(2) Published and presented work locally and internationally",
          "(3) Spearheaded production on video detailing the lab's innovations in Machine Learning",
          "August 2018-August 2020",
        ],
        link: null,
      },
      {
        id: "trane",
        label: "Engineer Co-op",
        lines: [
          "Trane, Lexington, KY",
          "(1) Developed a new feature for a VB.NET application that supported an improvement plan for a manufacturing plant. Feature reduced waste of cut metal parts",
          "(2) Developed a VBA application used by all project leaders to easily access important dates and information on all current projects. Automated updating of desired project information",
          "January 2018-July 2018",
        ],
        link: null,
      },
    ],
  },
};
