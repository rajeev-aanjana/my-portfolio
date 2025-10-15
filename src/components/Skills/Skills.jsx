import React from 'react'
import { Layers } from 'lucide-react'
import SkillCategory from './SkillCategory'
import { techStack } from '../../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <Layers className="text-blue-500" size={28} />
          <h2 className="text-5xl font-bold">Tech Stack</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, skills]) => (
            <SkillCategory 
              key={category} 
              category={category} 
              skills={skills} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}