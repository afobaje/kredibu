'use client'
import { createContext, ReactNode } from 'react'

export const AuthContext = createContext({
    occupation: '',
})

export default function AuthProvider({ children }: { children: ReactNode }) {
    return (
        <AuthContext.Provider value={{ occupation: 'developer' }}>{children}</AuthContext.Provider>
    )
}


