import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AIToolList from '../components/AIToolList'
import TestimonialSection from '../components/TestimonialSection'
import PricePlan from '../components/PricePlan'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AIToolList />
            <TestimonialSection />
            <PricePlan />
            <Footer />
        </>

    )
}

export default Home