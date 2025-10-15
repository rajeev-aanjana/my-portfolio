import React from 'react'
import { CreditCard, Lock } from 'lucide-react'
import { useMousePosition } from '../../hooks/useMousePosition'

export default function BackgroundEffects() {
  const mousePosition = useMousePosition()

  return (
    <>
      {/* Animated gradient background */}
      <div
        className="fixed inset-0 opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`
        }}
      />
     
      {/* Grid pattern overlay */}
      <div 
        className="fixed inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} 
      />

      {/* Floating payment icons */}
      <div className="fixed top-20 right-20 opacity-5 animate-pulse">
        <CreditCard size={120} />
      </div>
      <div className="fixed bottom-40 left-20 opacity-5 animate-pulse delay-700">
        <Lock size={100} />
      </div>
    </>
  )
}