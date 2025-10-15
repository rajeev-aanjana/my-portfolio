import React from 'react'
import { Terminal } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Terminal className="text-blue-500" size={24} />
          <span className="font-mono text-sm tracking-wider">RAJEEV.DEV</span>
        </div>
        <div className="flex gap-6">
          <a href="#work" className="text-sm hover:text-blue-400 transition-colors">Work</a>
          <a href="#skills" className="text-sm hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="text-sm hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  )
}