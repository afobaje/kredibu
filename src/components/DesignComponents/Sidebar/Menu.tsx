'use client'
import { useDocked } from '@/context/SidebarContext'
import { MenuItemType, MenuType } from '@/Types/Type'
import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'


export default function Menu({ item }: MenuType) {

    return (
        <div className='flex py-3 flex-col gap-2'>

            <ul>
                {item.map((val, i) => <li key={i}>{val}</li>)}
            </ul>
        </div>
    )
}


export function MenuItem({ icon, label, href, onClick }: MenuItemType) {
    const router = useRouter()
    const docked = useDocked()
    const pathName = usePathname()


    function handleClick() {
        if (href) {
            router.push(href)
        } else {
            onClick?.()
        }
    }

    function getActive(): boolean {

        if (href) {
            return pathName.includes(href);
        }
        return false;
    }
    const isActive = getActive()


    return <div onClick={handleClick} className={clsx(docked ? 'w-12 ' : 'py-4 px-2', "flex hover:text-white h-12 hover:bg-green-400 items-center rounded-full justify-center cursor-pointer my-2",
        isActive && 'bg-green-400 text-white'
    )}>
        <div className={clsx("flex gap-1 justify-center items-center ")}>
            <span className='text-lg'>{icon}</span>
            {docked ? <></> : <span className='font-normal'>{label}</span>}
        </div>
    </div>
}