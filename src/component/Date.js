import React from 'react'

const Date = (props) => {
  return (
    <>
        <div className='h-[5rem] w-[5rem] bg-black text-white rounded-xl'>
          <p className='font-sans text-center text-[13px] font-semibold'>{props.name.day}</p>
          <p className='font-sans text-center text-[15px] font-semibold'>{props.name.month}</p>
          <p className='font-sans text-center text-[20px] font-semibold'>{props.name.year}</p>
        </div>
    </>
  )
}

export default Date