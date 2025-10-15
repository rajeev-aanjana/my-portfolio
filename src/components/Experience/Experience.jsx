import React from 'react'
import { Briefcase } from 'lucide-react'
import ExperienceTimeline from './ExperienceTimeline'
import { experiences } from '../../data/portfolioData'

export default function Experience() {
  return (
    <section id="work" className="py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <Briefcase className="text-blue-500" size={28} />
          <h2 className="text-5xl font-bold">Experience</h2>
        </div>

        <ExperienceTimeline experiences={experiences} />
      </div>
    </section>
  )
}