import { HomePageType } from '@/Types/ComponentType'
import clsx from 'clsx'
import Image from 'next/image'
import ImageFiles from './../Constants/Image'
import { Container } from './DesignComponents/Container'
import LinkButton from './DesignComponents/LinkButton'
const { Trust } = ImageFiles;

function HomePageContainer({ className, children }: HomePageType) {
    return <div className={clsx('min-h-[60lvh] my-10', className)}>{children}</div>
}

function DeveloperExperience() {
    return <HomePageContainer className='flex'>
        <div className="flex flex-col gap-3 max-w-[50%]">
            <h2 className='text-3xl lg:text-4xl '>Easily build with well-documented APIs</h2>
            <p className='text-xl leading-8'>We have well crafted and tested resources to make your development easy. With our platform, we give you the wheel. Want to create a simple application or a complex application managing thousands and millions of users? We have provided different SDKs and APIs to make your development easy </p>
            <p className='text-xl'>Leave the headache of client credibility to us and go make cool products with our platform</p>
        </div>
        <div className="flex">
            <p>Hello world</p>
        </div>
    </HomePageContainer>
}

function HowToUse() {
    return <HomePageContainer className='lg:max-w-[70%] mx-auto' >
        <div className='flex-col gap-8 flex justify-center items-center'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-3xl lg:text-4xl  text-center'>Verify user data easily</h2>
                <p className='text-lg'>We are creating a trust product usable by individuals, organizations, developers among different groups. No need for person-no-person, get credible and verifiable data on kredibu</p>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className='text-center text-3xl lg:text-4xl'>What are the benefits of working with us?</h2>
                <ul className='list-benefit flex flex-col'>

                    <li className=''>Easily verify a client physically by searching user details by his unique identification number</li>
                    <li className=''>With our systems, you can verify 1 person or 100 people in milliseconds</li>
                    <li className=''>Seamless integration to your products with easy to use APIs and SDKs</li>
                    <li className=''>Speak less, let kredibu do the work, we speak for you in high places </li>
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
                    <LinkButton className='pt-3 p-4' link='/sign-up' text='Create a free account' />
                </div>
            </div>
            <div className="hidden lg:flex">
                <div className="flex relative items-center justify-center">
                    <Image src={Trust} alt="trust" className='w-full hero-image relative -0 -right-28 -top-20 -z-20 h-full object-contain' />
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
            <DeveloperExperience />
        </Container>
    )
}
