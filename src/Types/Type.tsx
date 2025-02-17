
import { BusinessSignUpFormSchema } from "@/utils/auth/signup"
import { ChangeEvent, ReactNode } from "react"
import { z } from "zod"

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
    inputName: string
    className?: string
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

export type ProjectType = { children: ReactNode }


export type FormState = | {
    errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
    }
    message?: string
}|undefined


export type BusinessFormState=|{
    errors?:{
        businessName?:string[]
    }
    message?:string
}|undefined

export type BusinessFormType=z.infer<typeof BusinessSignUpFormSchema>;