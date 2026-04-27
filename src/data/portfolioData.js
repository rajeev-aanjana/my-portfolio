export const roles = ['Full Stack Developer', 'UI Engineer', 'React Specialist', 'Problem Solver']

export const techStack = {
  'UI Engineering': ['React.js','NextJs', 'Redux', 'Tailwind CSS', 'Material UI', 'CSS', 'HTML'],
  'Backend & APIs': ['Java', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'RESTful APIs', 'MongoDB', 'SQL'],
  'AI Tools & Tech' : ['Generative AI', 'LLM', 'Prompt Engineering', 'Open AI', 'Gemini', 'Claude'],
  'Developer Tools': ['Git', 'CI/CD', 'Webpack', 'SQL', 'VS Code']
}

export const experiences = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Odoo India',
    period: 'Apr 2025 - March 2026',
    responsibilities: [
      'Contributed as a core member of Odoo’s R&D Accounting team, delivering feature development, localization, and regulatory compliance for Belgium, Sweden, Serbia, and India within Odoo 19 Accounting',
      ' Developed reusable React.js UI components with TypeScript, reducing code redundancy and significantly improving module maintainability and UI reliability across the codebase',
      'Integrated REST APIs into the React frontend using Redux / Redux Toolkit, implementing robust error handling and delivering seamless, user-friendly data interactions.',
      'Collaborated cross-functionally with QA, backend engineers, and functional consultants for integration testing, bug resolution, and UI validation prior to production releases.',
    ],
    isCurrent: true
  },
  {
    id: 2,
    title: 'Software Engineer 1',
    company: 'Lucent Innovation',
    period: 'Aug 2024 - Jan 2025',
    responsibilities: [
      'Developed interactive, high-performance UI components using React.js, TypeScript, and Material UI, improving UI consistency, usability, and user engagement for a B2B SaaS product.',
      'Collaborated with cross-functional teams to develop the company’s SaaS product, demonstrating strong communication and problem-solving skills to ensure client requirements and ensuring timely delivery of features and bug fixes',
      'Built and delivered two production-ready SaaS applications using Javascript, React, TypeScript, Tailwind CSS, and Redux Toolkit. live projects, driving the company’s growth and innovation.'
      'Designed and implemented Redux-based state management solutions to handle complex, multi-screen application state with efficiency and predictability.',
    ],
    isCurrent: false
  },
  {
    id: 3,
    title: 'Software Developer',
    company: 'Barlours',
    period: 'Feb 2023 - Mar 2024',
    responsibilities: [
      'Optimized component rendering logic and UI workflows, resulting in faster page interactions and a smoother end-user experience across the application.',
      'Delivered high-performance React interfaces with TypeScript and Material UI',
      'Integrated RESTful APIs following clean architecture principles, collaborating with backend teams to resolve API-level issues and ensure seamless data flow'
    ],
    isCurrent: false
  }
]

export const projects = [
  {
    id: 1,
    title: 'Competition Door',
    description: 'Competition discovery platform with role-based dashboards, real-time search filters, and secure authentication.',
    icon: 'Zap',
    technologies: ['ReactJs', 'Redux', 'HTML', 'Tailwind', 'MUI', 'Firebasse'],
    features: [
      'Event listing APIs with advanced filtering',
      'Real-time search by venue, category, date',
      'Secure role-based access control'
    ],
    gradient: 'from-blue-500/10 to-transparent',
    borderColor: 'border-blue-500/20 hover:border-blue-500/50',
    iconColor: 'text-blue-400',
    link: null
  },
  {
    id: 2,
    title: 'Adorn Your Motor',
    description: 'Car service booking platform with real-time tracking, OTP authentication, and mobile-first design.',
    icon: 'CreditCard',
    technologies: ['React', 'HTML', 'CSS', 'NodeJs', 'Express', 'MongoDB'],
    features: [
      'Real-time booking and service tracking',
      'OTP-based secure authentication',
      'Reusable component architecture'
    ],
    gradient: 'from-cyan-500/10 to-transparent',
    borderColor: 'border-cyan-500/20 hover:border-cyan-500/50',
    iconColor: 'text-cyan-400',
    link: null
  },
  {
    id: 3,
    title: 'Many More...',
    description: 'Visit GitHub',
    icon: 'CreditCard',
    technologies: [],
    features: [],
    gradient: 'from-cyan-500/10 to-transparent',
    borderColor: 'border-cyan-500/20 hover:border-cyan-500/50',
    iconColor: 'text-cyan-400',
    link: 'https://github.com/rajeev-aanjana', // Your GitHub URL
    isExternal: true
  }
]
