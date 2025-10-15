import React from 'react'

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="space-y-12">
      {experiences.map((experience, index) => (
        <div 
          key={experience.id}
          className={`group relative pl-8 border-l-2 ${
            experience.isCurrent 
              ? 'border-blue-500/30 hover:border-blue-500' 
              : 'border-white/10 hover:border-blue-500'
          } transition-colors`}
        >
          <div 
            className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ring-4 ring-black ${
              experience.isCurrent 
                ? 'bg-blue-500' 
                : 'bg-white/30 group-hover:bg-blue-500 transition-colors'
            }`} 
          />
          <div className="pb-8">
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold mb-1">{experience.title}</h3>
                <p className={experience.isCurrent ? "text-blue-400" : "text-gray-400"}>
                  {experience.company}
                </p>
              </div>
              <span className="text-gray-500 text-sm">{experience.period}</span>
            </div>
            <ul className="space-y-3 text-gray-400">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}