import { BsArrowLeftCircle , BsArrowRightCircle} from 'react-icons/bs'
import { child, girl, landscape } from '../assets' 

const Booking = () => {
  return (
    <div className='bg-[#F7F8FC] mt-20'>
        <div className='flex'>
            <div className='flex-1 flex flex-col gap-2'>
                <h1 className='text-[50px] font-bold font-montserrat'>why you need to book<span className='text-secondary'><br /> with US. </span> </h1>
                <p className='text-primary-text'>Community Tourism is what makes us so special. When you decide to make a trip with us you will have a guest house that is near to the community you will have your own custom house that is similar to the community and it called GOJO(Traditional House of People who live in the countryside.)</p>
            <div className='mx-auto flex gap-2'>
                <BsArrowLeftCircle className="w-7 h-7" />
                <BsArrowRightCircle className="w-7 h-7" />
            </div>
            </div>
            <div className='flex-1 grid grid-cols-2 gap-10 relative'>
                <img src={landscape} alt=""className=' scale-75' />
                <img src={girl} alt="" className=' scale-75'/>
                <img src={child} alt="" className='absolute top-10 col-span-2 right-40 scale-75'/>
            </div>
        </div>
    </div>
  )
}

export default Booking