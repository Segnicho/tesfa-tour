import React from 'react'
import { CardProps } from '../../types/offerings/card'


const Card:React.FC<CardProps> = ({img, title, desc}) => {
  return (
    <div className='bg-white shadow-md p-5 flex flex-col gap-3 justify-center w-[250px] h-[300px] m-5 rounded-lg'>
      <img src ={img} alt="" className='w-[150px] h-[150px] mx-auto' />
      <h1 className='text-center font-semibold'>{title}</h1>
      <p className='pl-5 text-primary-text'> {desc} </p>
    </div>
  )
}

export default Card