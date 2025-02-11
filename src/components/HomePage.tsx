import clsx from 'clsx'
import { Container } from './DesignComponents/Container'
import LinkButton from './DesignComponents/LinkButton'
import { ReactNode } from 'react'


function HomePageContainer({className,children}:{className?:string,children:ReactNode}){
    return <div className={clsx('min-h-[60lvh]  my-10 ',className)}>{children}</div>
}

function DeveloperExperience(){
    return <HomePageContainer>
        <div className="flex flex-col max-w-[50%]">
            <h2>Easily build with well-documented APIs</h2>
        </div>
    </HomePageContainer>
}

function HowToUse() {
    return <HomePageContainer className='max-w-[70%] mx-auto' >

        <div className='flex-col gap-8 flex justify-center  items-center'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-3xl lg:text-4xl  text-center'>Verify user data easily</h2>
                <p className='text-lg'>We are creating a trust product usable by individuals, organizations, developers among different groups. No need for person-no-person, get credible and verifiable data on kredibu</p>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className='text-center text-3xl lg:text-4xl'>What are the benefits of working with us?</h2>
                <ul className='list-benefit flex flex-col'>

                    <li>Easily verify a client physically by searching user details by his unique identification number</li>
                    <li>With our systems, you can verify 1 person or 100 people in milliseconds</li>
                    <li>Seamless integration to your products with easy to use APIs and SDKs</li>
                    <li>Speak less, let kredibu do the work, we speak for you in high places </li>
                </ul>
            </div>
        </div>
    </HomePageContainer>
}


function HeroNav() {
    return <div className='h-[100vh]'>
        <div className='flex h-full container '>
            <div className='text-wrapper gap-4 flex flex-col  lg:max-w-[50%]'>
                <div className='font-bold pt-24 text-3xl lg:text-4xl'>
                    <h1>Transact business with</h1>
                    <h1>peace of mind backed by data.</h1>
                </div>
                <p className='text-lg'>We are powering systems with data of carefully vetted clients to allow you make your next transaction with ease and also peace of mind.</p>
                <div>
                    <LinkButton link='/sign-up' text='Create a free account' />
                </div>
            </div>
        </div>
    </div>
}

export default function HomePage() {
    return (
        <Container className='flex gap-5 flex-col'>
            <HeroNav />
            <HowToUse />
            <DeveloperExperience/>
        </Container>
    )
}
