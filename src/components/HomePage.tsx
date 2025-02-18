'use client'
import ImageFiles from '@/Constants/Image'
import { useInputValue } from '@/hooks/useInputValue'
import { HomePageType } from '@/Types/Type'
import { getAcronym } from '@/utils/getAcronym'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { GoArrowUpRight } from 'react-icons/go'
import InputField from './DesignComponents/InputField'
import LinkButton from './DesignComponents/LinkButton'
import HomePageLayout from './HomePageLayout/HomePageLayout'
const { Trust, Lines, SDK } = ImageFiles;

export function HomePageContainer({ className, children }: HomePageType) {
    return <div className={clsx('min-h-[60lvh] my-10 w-10/12 mx-auto', className)}>{children}</div>
}

function UniqueId() {
    const [userState, handleState] = useInputValue()
    const [userCountry, handleCountry] = useInputValue()

    const userStateAcronym: string = getAcronym(userState);
    const userCountryAcronym: string = getAcronym(userCountry);
    return <HomePageContainer className='flex flex-col lg:flex-row gap-5 lg:gap-3 items-center justify-center'>
        <div className="flex verify-card min-h-80 p-5 w-full">
            <div className="flex flex-col gap-3">
                <h2 className='text-2xl '>
                    {`Don't know your state or country acronym? Verify here`}
                </h2>
                <div className="flex">
                    <div className="input-container flex flex-col gap-2">
                        <InputField inputName='state' placeholder='State' value={userState} onChange={handleState} type='text' />
                        <p className='ml-2'>{userState}</p>
                        <p>{userStateAcronym}</p>
                    </div>
                    <div className="input-container flex flex-col gap-2">
                        <InputField inputName='Country' placeholder='Country' value={userCountry} onChange={handleCountry} type='text' />
                        <p className='ml-2'>{userCountry}</p>
                        <p>{userCountryAcronym}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex lg:max-w-[45%] pl-5 flex-col gap-3">
            <h2 className="text-3xl">What does the unique ID look like?</h2>
            <p className='text-lg'>Because we are creating a system that is usable globally, we created a unique id system which is a collection of your state, country and unique digits</p>
            <p className='text-lg'>Any state or country is easily verifiable here</p>
        </div>
    </HomePageContainer>
}

function DeveloperProduct() {

    return <div className="flex dev min-h-[70vh]">
        <HomePageContainer>
            <div className='flex  flex-col gap-10'>
                <h1 className='text-3xl font-bold'>Supercharge your application with powerful SDKs</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="card-one p-12 lg:col-span-2 rounded-3xl bg-amber-50  justify-evenly flex">
                        <div className='max-w-1/2 flex items-center justify-center'>
                            <h2 className='text-5xl px-10 font-bold'>Access a well secured data with no security leak</h2>
                        </div>
                        <div className="sdk max-w-1/2"
                        // style={{backgroundImage:`url(${SDK.src})`,backgroundSize:'cover',backgroundColor:'red'}}
                        >
                            <figure className=''>
                                <Image src={SDK} className='sdk-img -mb-12 rounded-tl-3xl rounded-tr-3xl object-contain ' alt="" />
                            </figure>
                        </div>
                        {/* <h2>Supercharge your application with plug-and-play SDKs</h2> */}
                    </div>
                    <div className="card-two gap-5 p-10 rounded-3xl bg-blue-300 text-start">
                        <h2 className='text-2xl'>Approve vital information based on data</h2>
                        <span className="inline-flex items-center justify-center gap-1">
                            <Link href='/docs' className='text-blue-600  hover:underline underline-offset-4'>Read our API docs</Link>
                            <GoArrowUpRight className=' text-blue-600' />
                        </span>
                        {/* <LinkButton link='/docs'  text='Go to Docs' /> */}
                    </div>
                    <div className="card-three p-10  rounded-3xl bg-blue-300 text-start">
                        <h2 className='text-2xl'>Transact business sponsored by data</h2>
                    </div>
                </div>
            </div>
            <style>
                {`
             .sdk-img{
             z-index:-4;}
             .dev{
            background-position:cover;
             background-image:url('${Lines.src}')};
             `}
            </style>
        </HomePageContainer>
    </div>
}

function DeveloperExperience() {
    return <HomePageContainer className='flex'>
        <div className="flex flex-col gap-3 max-w-[50%]">
            <h2 className='text-3xl lg:text-4xl '>Easily build with well-documented APIs</h2>
            <p className='text-xl leading-8'>We have well crafted and tested resources to make your development easy. With our platform, we give you the wheel. Want to create a simple application or a complex application managing thousands and millions of users? We have provided different SDKs and APIs to make your development easy </p>
            <p className='text-xl'>Leave the headache of client credibility to us and go make cool products with our platform</p>
        </div>
        <div className="flex">

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
    return <HomePageContainer>

        <div className='h-[100vh]'>
            <div className='flex h-full container '>
                <div className='text-wrapper gap-6 flex flex-col  lg:max-w-[50%]'>
                    <div className='font-bold pt-24 text-3xl lg:text-4xl'>
                        <h1>Transact business with</h1>
                        <h1>peace of mind backed by data.</h1>
                    </div>
                    <p className='text-lg'>We are powering systems with data of carefully vetted clients to allow you make your next transaction with ease and also peace of mind.</p>
                    <div>
                        {/* <Link href='/'></Link> */}
                        <LinkButton className='pt-3 mt-6 p-4' link='/sign-up' text='Create a free account' />
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <div className="flex relative items-center justify-center">
                        <Image src={Trust} alt="trust" className='w-full hero-image relative -0 -right-28 -top-20 -z-20 h-full object-contain' />
                    </div>
                </div>
            </div>
        </div>
    </HomePageContainer>

}




export default function HomePage() {
    return (
        <HomePageLayout>
            <div className='flex mx-auto gap-5 flex-col'>
                <HeroNav />
                <HowToUse />
                <DeveloperProduct />
                <DeveloperExperience />
                <UniqueId />
            </div>
        </HomePageLayout>



    )
}
