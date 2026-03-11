import FeatureCard from "./FeatureCard"
import dashboard from "../../assets/image/dashboard.png"
import rocketicon from "../../assets/image/rocketicon.png"
import Section from "../../assets/image/seticon.png"
import squareicon from "../../assets/image/squareicon.png"
import powericon from "../../assets/image/powericon.png"
const HeroDashboard = () => {
  return (
    <div className="max-w-[1040px] w-full flex flex-col items-center gap-5 mt-16">

      <div className="w-full h-[661px] rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
         <img
          src={dashboard}
          alt="dashboard"
          className="rounded-lg w-full"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 w-full">

        <FeatureCard
         img={rocketicon}
          title="Team efficiency"
          desc="Instantly sync your notes across devices"
        />

        <FeatureCard
          img={Section}
          title="Set goals"
          desc="Instantly sync your notes across devices"
        />

        <FeatureCard
          img={squareicon}
          title="Manage permissions"
          desc="Instantly sync your notes across devices"
        />

        <FeatureCard
          img={powericon}
          title="On-time completion"
          desc="Instantly sync your notes across devices"
        />

      </div>

    </div>
  )
}

export default HeroDashboard