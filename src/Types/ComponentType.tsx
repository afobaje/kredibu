import { ReactNode } from "react"

export type HomePageType={
    className?:string,
    children:ReactNode
}

export type LinkButtonType = {
    text: string,
    link: string,
    className?: string
}