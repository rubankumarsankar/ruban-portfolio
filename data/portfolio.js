export const portfolioData = {
  personalInfo: {
    name: "Rubankumar Sankar",
    shortName: "RUBAN",
    title: "Python Backend Developer",
    location: "Chennai, India",
    email: "srirubankumar@gmail.com",
    phone: "+91-8111040614",
    github: "#",
    linkedin: "#",
    resumeUrl: "#",
    version: "V_1.0.0_STABLE",
  },
  home: {
    heroTitle: "PYTHON\nBACKEND\nDEVELOPER",
    heroDescription: "I’m a Software Engineer with 2.2+ years of experience in building scalable web applications using modern frontend and backend technologies. I specialize in React.js, Next.js, FastAPI, and MySQL.",
    codeSnippet: {
      className: "Rubankumar",
      stack: "['Python', 'FastAPI', 'React', 'Next.js', 'MySQL']",
      focus: "'Backend Development'"
    },
    capabilities: [
      {
        id: "CAP_01",
        title: "PYTHON ECOSYSTEM",
        color: "#38bdf8",
        skills: ["FastAPI", "Pandas", "NumPy"]
      },
      {
        id: "CAP_02",
        title: "DATABASE & TOOLS",
        color: "#4ade80",
        skills: ["MySQL", "PostgreSQL", "Git & GitHub"]
      },
      {
        id: "CAP_03",
        title: "FRONTEND / JS",
        color: "#fb923c",
        skills: ["React.js", "Next.js", "JavaScript"]
      }
    ]
  },
  projects: {
    standard: [
      {
        id: "SEC_01",
        node: "NODE.ALPHA",
        title: "SecureAuth API",
        subtitle: "authentication system",
        duration: "Q1 2023 — Q2 2023",
        description: "A secure authentication system using FastAPI with JWT-based login, password hashing, and protected routes.",
        features: ["Implemented user signup & login", "Used JWT for authentication", "Secured API endpoints"],
        demoLink: "#",
        repoLink: "#"
      },
      {
        id: "SEC_02",
        node: "NODE.BETA",
        title: "TaskFlow API",
        subtitle: "task management",
        duration: "Q3 2023",
        description: "A task management system where users can manage personal tasks securely.",
        features: ["CRUD operations for tasks", "User-specific data access", "Integrated authentication"],
        demoLink: "#",
        repoLink: "#"
      },
      {
        id: "SEC_03",
        node: "NODE.GAMMA",
        title: "FileVault API",
        subtitle: "file management backend",
        duration: "Q4 2023",
        description: "A file management backend system for uploading and retrieving files securely.",
        features: ["File upload & storage", "Metadata handling", "Secure access with authentication"],
        demoLink: "#",
        repoLink: "#"
      },
      {
        id: "SEC_04",
        node: "NODE.DELTA",
        title: "BlogSphere API",
        subtitle: "rbac blogging backend",
        duration: "Q1 2024",
        description: "A blogging backend with role-based access control (RBAC).",
        features: ["Admin & user roles", "Blog and comment system", "Permission-based actions"],
        demoLink: "#",
        repoLink: "#"
      }
    ],
    advanced: {
      id: "SEC_05",
      node: "NODE.OMEGA",
      title: "DataFlow Engine",
      subtitle: "scalable backend system",
      duration: "Mid 2024 — Present",
      description: "A scalable backend system combining authentication, ETL pipelines, and background processing.",
      features: [
        "CSV to database ETL pipeline",
        "Data processing using Pandas",
        "Background task execution",
        "API for processed data"
      ],
      demoLink: "#",
      repoLink: "#"
    }
  },
  timeline: [
    {
      type: "experience",
      id: "LOC_01 // PD",
      duration: "Jan 2023 — Present",
      role: "Software Engineer",
      entity: "Ayatiworks Technology LLP",
      description: "Developed frontend using React.js and Next.js. Built backend APIs using FastAPI. Designed and optimized MySQL databases. Integrated APIs and improved application performance.",
      tags: ["[REACT_NEXTJS]", "[FASTAPI]", "[MYSQL]"]
    },
    {
      type: "experience",
      id: "LOC_02 // AW",
      duration: "Jan 2022 — Jan 2023",
      role: "Software Engineer",
      entity: "Amazingwits IoT Pvt Ltd",
      description: "Worked on web application development using MEAN stack concepts. Built responsive UI and integrated APIs. Handled backend logic and database operations. Collaborated with team to deliver features and fix bugs.",
      tags: ["[MEAN_STACK]", "[API_INTEGRATION]", "[DATABASE_OPS]"]
    },
    {
      type: "education",
      id: "LOC_03 // SHC",
      duration: "Aug 2021 — May 2023",
      role: "Master of Computer Applications",
      entity: "Sacred Heart College",
      percentage: "85%", // Placeholder for user to update
      description: "Specialized in advanced software engineering, database architectures, and distributed systems. Graduated with high academic standing.",
      tags: ["[POSTGRADUATE]", "[SOFTWARE_ENGINEERING]"]
    },
    {
      type: "education",
      id: "LOC_04 // GCAS",
      duration: "Aug 2018 — May 2021",
      role: "B.Sc Computer Science",
      entity: "Govt College of Arts and Science",
      percentage: "80%", // Placeholder for user to update
      description: "Studied core computer science fundamentals, data structures, algorithms, and web development technologies.",
      tags: ["[UNDERGRADUATE]", "[COMPUTER_SCIENCE]"]
    }
  ]
};
