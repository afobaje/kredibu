
import { PropsType } from '@/Types/Type'
import Footer from '../Footer'
import { Header } from '../Header'




export default function HomePageLayout({ children }:PropsType) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
