import HeroSlider from '../components/sections/HeroSlider'
import StatsDark from '../components/blocks/StatsDark'
import FocusCards from '../components/blocks/FocusCards'
import TestimonialSlider from '../components/blocks/TestimonialSlider'
import CardSlider from '../components/blocks/CardSlider'
import PartnerSlider from '../components/blocks/PartnerSlider'

const Home = () => {
    return (
        <section className='w-full'>
            <HeroSlider />
            <StatsDark />
            <FocusCards />
            <TestimonialSlider />
            <CardSlider />
            <PartnerSlider />

        </section >
    )
}

export default Home