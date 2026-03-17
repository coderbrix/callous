import CTASection from "../../components/ctaection/CTASection"
import Feature from "./components/feature/Feature"
import Hero from "../../components/hero/Hero"
import Testimonials from "./components/testimonials/Testimonials"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0F19] via-[#070A12] to-black text-white">
      <Hero/>
      <Feature/>
      <Testimonials/>
      <CTASection/>
    </div>
  )
}

export default Home