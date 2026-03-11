import { RocketIcon } from "lucide-react"
import Arc from "../../assets/image/arc.png"
import b1 from "../../assets/image/b1.png"
import b2 from "../../assets/image/b2.png"
import featureDashboard from "../../assets/image/featureDashboard.png"
import FeatureCard from "../hero/FeatureCard"
import rocketicon from "../../assets/image/rocketicon.png"
import Section from "../../assets/image/seticon.png"
import squareicon from "../../assets/image/squareicon.png"
import powericon from "../../assets/image/powericon.png"

const FeatureDashboard = () => {
  return (
    <div className="max-w-[1040px] w-full flex flex-col items-center gap-5 mt-16">

      <div className=" rounded-xl bg-[#F8F8F8] z-10  border border-white/10">
         <img
          src={featureDashboard}
          alt="dashboard"
          className="rounded-lg w-full"
        />
      </div>
  
     <div className=" absolute top - [20px]">
         <img
          src={Arc}
          alt="Arc"
          className="rounded-lg w-full"
        />
     </div>
     <div className="relative top-[-50px]">
         <img
          src={b2}
          alt="b2"
          className="rounded-lg w-full"
        />
        <img
          src={b1}
          alt="b1"
          className="rounded-lg w-full absolute top-[-20px]"
        />
       
     </div>
      <div className="grid grid-cols-4 gap-16 w-[1080px] bg-[#141417] relative top-[-200px] p-8 rounded-lg text-left border border-white/10">
       
       
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

export default FeatureDashboard