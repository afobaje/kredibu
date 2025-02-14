import { HomePageContainer } from "./HomePage";

export default function Footer() {
    return <footer className='flex flex-col  min-h-[70lvh]'>
        <HomePageContainer className="px-10 scroll-px-2">
            <div className="flex w-full">
                <div className="logo flex justify-center items-center">
                    <h1>Kredibu</h1>
                </div>
            </div>
        </HomePageContainer>
    </footer>
}