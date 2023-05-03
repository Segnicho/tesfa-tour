// import React from 'react'

import {AiFillStar} from 'react-icons/ai'

import { CardProps } from '../../types/destination/card'

const Card:React.FC<CardProps> = (destination) => {
  return (
    <div className='border rounded-md shadow-md w-[270px] h-[400px]'>
        <div className='p-3'>
        <img src={destination.img} alt="" className='mx-auto' />
        <div className='flex justify-between py-2'> <h2 className='font-semibold'> {destination.name}</h2> <p className='flex gap-1'> <AiFillStar className="text-[#FFD700] pt-1 scale-150" /> 4.8 </p> </div>
        <p className='text-primary-text text-center'>{destination.desc} </p>
        <div className='flex py-2 justify-between  text-primary-text '><section className='pt-2'>{destination.location}</section> <section className='flex gap-2 text-secondary pt-1'> <section className='line-through text-primary-text pt-1'>${destination.payment}</section> <span className='bg-blue-100 rounded-md p-1'> ${destination.payment - destination.discount}</span></section></div>
        </div>


    </div>
  )
}

export default Card