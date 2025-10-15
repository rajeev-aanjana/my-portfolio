import React from 'react'

export default function SkillCategory({ category, skills }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
      <h3 className="text-lg font-semibold mb-4 text-blue-400">{category}</h3>
      <div className="space-y-2">
        {skills.map((skill) => (
          <div key={skill} className="text-gray-400 text-sm py-1">
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}