import Link from 'next/link'

type LinkButton = {
    text: string,
    link: string,
    className?: string
}

export default function LinkButton({ text, link }: LinkButton) {
    return (<>
        <Link className='rounded-md whitespace-nowrap pt-3 link font-bold text-lg p-4 text-white ' href={link} >{text}</Link>
        <style>{`
        .link{
        background-color:var(--moderate-green);
        }
        `}</style>
    </>
    )
}
