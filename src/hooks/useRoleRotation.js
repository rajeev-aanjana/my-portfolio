import { useState, useEffect } from 'react'

export function useRoleRotation(roles, interval = 2500) {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, interval)
    
    return () => clearInterval(roleInterval)
  }, [roles.length, interval])

  return currentRole
}