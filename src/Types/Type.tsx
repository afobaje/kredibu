import { ChangeEvent, ReactNode } from "react"

export type HomePageType = {
    className?: string,
    children: ReactNode
}

export type LinkButtonType = {
    text: string,
    link: string,
    className?: string
}

export type InputType = {
    type: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    value?: string
    placeholder: string
}

export type TabsType = {
    tabsName: string[]
    className?: string
    tabsContent: ReactNode[]
    // renderItem: () => ReactNode
}