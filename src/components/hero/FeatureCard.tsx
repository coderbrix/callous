type Props = {
  title: string
  desc: string
  img: string
}

const FeatureCard = ({ title, desc, img }: Props) => {
  return (
    <div className="p-4 backdrop-blur-lg rounded-lg">


      <img
        src={img}
        alt={title}
        className="rounded-lg w-full mt-4 h-[20px] w-[20px]"
      />

      <div className="text-white font-medium ">
        {title}
      </div>

      <p className="text-gray-400 text-sm">
        {desc}
      </p>


    </div>
  )
}

export default FeatureCard