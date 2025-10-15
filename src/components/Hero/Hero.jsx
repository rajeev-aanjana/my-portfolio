import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
import { useRoleRotation } from '../../hooks/useRoleRotation'
import { roles } from '../../data/portfolioData'

export default function Hero() {
  const currentRole = useRoleRotation(roles)

  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-20">
      <div className="max-w-5xl w-full">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm text-blue-300">Available for new opportunities</span>
          </div>
         
          <h1 className="text-7xl md:text-8xl font-bold mb-4 tracking-tight">
            Rajeev
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
              Aanjana
            </span>
          </h1>
         
          <div className="h-12 mb-6">
            <p className="text-2xl text-gray-400 font-light">
              {roles[currentRole]}
            </p>
          </div>

          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-8">
            Building secure, scalable payment experiences and financial interfaces.
            Currently working in accounting team at Odoo for global markets.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all flex items-center gap-2"
            >
              Let's Talk
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-lg transition-all"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10">
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-1">2+ Years</div>
            <div className="text-sm text-gray-500">Professional Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-1">20+</div>
            <div className="text-sm text-gray-500">Production Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-1">3</div>
            <div className="text-sm text-gray-500">Companies Worked</div>
          </div>
        </div>
      </div>
    </section>
  )
}