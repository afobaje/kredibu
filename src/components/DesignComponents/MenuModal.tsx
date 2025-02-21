import React, { ReactNode } from 'react'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '../ui/menubar'

export default function MenuModal({ trigger, menuItems }: { trigger: ReactNode, menuItems: ReactNode[] }) {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>{trigger}</MenubarTrigger>
                <MenubarContent className='bg-white'>
                    {menuItems.map((val, i) => <MenubarItem className='bg-gray-300' key={i}>{val}</MenubarItem>)}
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}
