export const roles = ['Full Stack Developer', 'UI Engineer', 'React Specialist', 'Problem Solver']

export const techStack = {
  'UI Engineering': ['React.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Material UI', 'CSS', 'HTML'],
  'Backend & APIs': ['Java', 'JavaScript', 'Node.js', 'RESTful APIs', 'MongoDB', 'SQL'],
  'Developer Tools': ['Git', 'Webpack', 'SQL', 'VS Code']
}

export const experiences = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Odoo India',
    period: 'Apr 2025 - Present',
    responsibilities: [
      'Core R&D team member developing accounting features for Belgium, Sweden, Serbia, and India markets in Odoo 19',
      'Built reusable components and scalable solutions following industry best practices',
      'Collaborated with QA teams for integration testing and performance optimization'
    ],
    isCurrent: true
  },
  {
    id: 2,
    title: 'Software Engineer 1',
    company: 'Lucent Innovation',
    period: 'Mar 2024 - Apr 2025',
    responsibilities: [
      'Shipped two production SaaS applications using React, TypeScript, Java Spring Boot, and Tailwind CSS',
      'Collaborated with cross-functional teams to develop the company’s SaaS product, demonstrating strong communication and problem-solving skills to ensure client requirements and ensuring timely delivery of features and bug fixes',
      'Built and delivered two production-ready SaaS applications using Javascript, React, TypeScript, Tailwind CSS, and Redux Toolkit. live projects, driving the company’s growth and innovation.'
    ],
    isCurrent: false
  },
  {
    id: 3,
    title: 'Software Developer',
    company: 'Barlours',
    period: 'Feb 2023 - Mar 2024',
    responsibilities: [
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