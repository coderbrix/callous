import { FaHourglassHalf, FaRocket } from 'react-icons/fa'
import { ImPower } from 'react-icons/im';
import { PiSquaresFourFill } from 'react-icons/pi';
import './WhatsIncluded.css';


export default function WhatsIncluded() {
  return (
    <section className='Boday-Container'>
      <div className='title'>
        <button className='features-btn'>Features</button>
        <h1 className='text-2xl manualMargin'>What's included</h1>
        <p className='opacity-30 mt-5'>Mauris massa arcu, dapibus sed fringilla at,
             suscipit quis diam. Nulla <br /> malesuada nulla accumsan mattis rhoncus.</p>
      </div>

{/* ----------------------grid section is herer------ */}
      <div className='grid-container'>
        <div className='card-sizing'>
            <FaRocket  />
            <h2>Drive cross-team <br /> efficiency</h2>
            <p>Instantly sync your notes <br /> across devices</p>
        </div>


        <div className='card-sizing'>
            <FaHourglassHalf />
            <h2>Set goals and drive <br /> alignment</h2>
            <p>Instantly sync your notes <br /> across devices</p>
        </div>

        <div className='card-sizing'>
            <PiSquaresFourFill />
        <h2>Manage permissions and  settings</h2>
        <p>Instantly sync your notes <br /> across devices</p>        
        </div>
                   
        <div className='card-sizing'>
            <ImPower />
        <h2>Increased on-time <br /> completion</h2>
        <p>Instantly sync your notes <br /> across devices</p>
        </div>

        <div className='card-sizing'>
            <PiSquaresFourFill />
        <h2>Manage permissions and settings</h2>
        <p>Instantly sync your notes <br /> across devices</p>        
        </div>

        <div className='card-sizing'>
            <FaHourglassHalf />
            <h2>Set goals and drive alignment</h2>
            <p>Instantly sync your notes <br /> across devices   </p> 
        </div>
    
        <div className='card-sizing'>
            <ImPower />
        <h2>Increased on-time completion</h2>
        <p>Instantly sync your notes <br /> across devices</p>
        </div>

        <div className='card-sizing'>
            <FaRocket />
            <h2>Drive cross-team efficiency</h2>
            <p>Instantly sync your notes <br /> across devices</p>
        </div>
        

      </div>



{/* --------------------new section ---------- The best platform for cross team work------ */}
      <section className='two-div'>
         <div className='title'>
        <button className='features-btn'>Features</button>
        <h1 className='text-2xl manualMargin'>The best platform for <br /> cross-team work</h1>
        <p className='opacity-30 mt-5'>Get more work done across teams with unlimited monthly actions,
             the <br /> ability to track hundreds of projects in one place, and by reporting <br /> 
             against your entire organization.</p>
      </div>
      <div className='Container-three-Card'>

        <div className='card-sizing-part-two'>
            <FaRocket  />
            <h2>Drive cross-team efficiency</h2>
            <p>Instantly sync your notes  across devices</p>
        </div>


        <div className='card-sizing-part-two'>
            <FaHourglassHalf />
            <h2>Set goals and drive  alignment</h2>
            <p>Instantly sync your notes  across devices</p>
        </div>

        <div className='card-sizing-part-two'>
            <PiSquaresFourFill />
        <h2>Manage permissions and  settings</h2>
        <p>Instantly sync your notes  across devices</p>        
        </div>
      </div>
      </section>
    </section>
  )
}
