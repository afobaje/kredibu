
import { ProjectType } from '@/Types/Type'
import Footer from '../Footer'
import { Header } from '../Header'




export default function HomePageLayout({ children }:ProjectType) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
