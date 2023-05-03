import React from 'react'
import Card from './Card'
import { Review } from '../../types/review/Review'
import { reviewer1, reviewer2, reviewer3 } from '../../assets'

const reviews:Review[] =[
  {stars:4, review:"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",name:"Mike Taylor", country:"Pakistan", img:reviewer1},
  {stars:4, review:"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",name:"Jordan Adam", country:"Europe", img:reviewer2},
  {stars:3, review:"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",name:"Hanna Jackson", country:"Poland", img:reviewer3}
]

const Reviews = () => {
  return (
    <div className='mt-[50px]'>
        <h1 className='text-center font-bold text-primaryHeading font-montserrat'>Some Of Top <span className='text-secondary'>Reviews </span></h1>
    <div className='flex gap-3 justify-center pt-5'>
    {
      reviews.map((review) => <Card {...review}/>)
    }
    </div>
    </div>
  )
}

export default Reviews