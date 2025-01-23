'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

type NotfyContextType = {
  notifySuccess: (message: string) => void
  notifyError: (message: string) => void
}

const NotfyContext = createContext<NotfyContextType | undefined>(undefined)

export const NotfyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notyf, setNotyf] = useState<Notyf | null>(null)

  useEffect(() => {
    setNotyf(new Notyf({ duration: 3000, position: { x: 'center', y: 'bottom' } }))
  }, [])

  const notifySuccess = (message: string) => {
    notyf?.success(message)
  }

  const notifyError = (message: string) => {
    notyf?.error(message)
  }

  return <NotfyContext.Provider value={{ notifySuccess, notifyError }}>{children}</NotfyContext.Provider>
}

export const useNotfyProvider = (): NotfyContextType => {
  const context = useContext(NotfyContext)
  if (!context) throw new Error('useNotfy must be used within a NotfyProvider')
  return context
}
