import Feature from "../../components/feature/Feature"
import Hero from "../../components/hero/Hero"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0F19] via-[#070A12] to-black text-white">
      <Hero/>
      <Feature/>

    </div>
  )
}

export default Home