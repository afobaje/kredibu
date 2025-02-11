import { Container } from './DesignComponents/Container'
import LinkButton from './DesignComponents/LinkButton'

function HeroNav() {
    return <Container className='h-[100vh]'>
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
    </Container>
}

export default function HomePage() {
    return (
        <div className='flex flex-col'>
            <HeroNav />
        </div>
    )
}
