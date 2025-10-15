import React from 'react'
import { Code2 } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/portfolioData'

export default function Projects() {
  return (
    <section id='projects' className="py-32 px-8 bg-gradient-to-b from-black via-blue-950/5 to-black">
      <div className="max-w-7xl mx-auto"> {/* Increased max-width for 3 columns */}
        <div className="flex items-center gap-3 mb-16">
          <Code2 className="text-blue-500" size={28} />
          <h2 className="text-5xl font-bold">Featured Work</h2>
        </div>

        {/* Updated grid for 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}