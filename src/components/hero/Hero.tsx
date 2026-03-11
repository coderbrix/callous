import HeroBadge from "./HeroBadge"
import HeroButtons from "./HeroButtons"
import HeroDashboard from "./HeroDashboard"

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center pt-32 pb-24">

      <div className="flex flex-col items-center gap-8 max-w-[575px] text-center">

        <HeroBadge />

        <h1 className="text-[48px] leading-[52px] font-medium text-[#E0E0E0]">
          Supercharge your business
        </h1>

        <HeroButtons />

      </div>

      <HeroDashboard />

    </section>
  )
}

export default Hero