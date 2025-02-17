import type { LinkButtonType } from '@/Types/Type'
import clsx from 'clsx'
import Link from 'next/link'



export default function LinkButton({ text, link, className }: LinkButtonType) {
    return (<>
        <Link className={clsx(className, 'rounded-md whitespace-nowrap  link text-sm text-white ')} href={link}>{text}</Link>
        <style>{`
        .link{
        background-color:var(--moderate-green);
        }
        `}</style>
    </>
    )
}
