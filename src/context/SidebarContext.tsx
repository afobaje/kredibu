'use client'
import { createContext, useContext } from 'react'


export const SidebarContext = createContext<{ docked: boolean }>({ docked: false })

export const useDocked = () => {
    try {
        return useContext(SidebarContext).docked;
    } catch {
        return false;
    }
}
