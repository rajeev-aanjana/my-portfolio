import React from 'react'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-6xl font-bold mb-6">Let's build something</h2>
        <p className="text-2xl text-gray-400 mb-12">
          Open to opportunities in fintech, payments, and enterprise software.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:rajeevaanjana.pvt@gmail.com"
            className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 hover:border-blue-500 rounded-lg transition-all"
          >
            <Mail size={20} />
            <span>rajeevaanjana.pvt@gmail.com</span>
          </a>
          <a
            href="tel:+919174057563"
            className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 hover:border-blue-500 rounded-lg transition-all"
          >
            <Phone size={20} />
            <span>+91 9174057563</span>
          </a>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://linkedin.com/in/rajeev-aanjana"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 rounded-lg transition-all"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/rajeev-aanjana"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 rounded-lg transition-all"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}