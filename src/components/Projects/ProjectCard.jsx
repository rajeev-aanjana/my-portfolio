import React from 'react'
import * as Icons from 'lucide-react'
import { Github } from 'lucide-react' // Import ExternalLink icon

export default function ProjectCard({ project }) {
  const IconComponent = Icons[project.icon]

  // Card content component
  const CardContent = () => (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <IconComponent className={project.iconColor} size={32} />
        </div>
        <div className="flex flex-wrap gap-2 justify-end max-w-[60%]">
          {project.technologies.map(tech => (
            <span 
              key={tech}
              className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
        {project.title}
      </h3>
      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
      
      <div className="space-y-2 text-sm text-gray-500">
      {project.link &&<Github size={24} />}
        {project.features.map((feature, index) => (
          <p key={index}>• {feature}</p>
        ))}
      </div>
    </>
  )

  // If project has a link, wrap in anchor tag
  if (project.link) {
    return (
      <a 
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group bg-gradient-to-br ${project.gradient} border ${project.borderColor} rounded-2xl p-6 hover:border-green-500/50 transition-all h-full flex flex-col cursor-pointer hover:scale-105 transform transition-transform duration-300 block`}
      >
        <CardContent />
      </a>
    )
  }

  // Regular card without link
  return (
    <div className={`group bg-gradient-to-br ${project.gradient} border ${project.borderColor} rounded-2xl p-6 hover:border-blue-500/50 transition-all h-full flex flex-col`}>
      <CardContent />
    </div>
  )
}