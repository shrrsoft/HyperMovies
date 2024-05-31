import React from 'react'

export default function MainMenu(props) {
  return (
    <div className='mx-auto'>
      <div className='mt-12'>
          <ul className='flex flex-col md:items-baseline items-center gap-3 md:gap-6 text-rose-100  md:flex-row'>
            <li className='text-slate-300 text-2xl m-2 md:m-6'>{props.title1}</li>
            <li className='hover:text-rose-400'>{props.title2}</li>
            <li className='hover:text-rose-400'>{props.title3}</li>
            <li className='hover:text-rose-400'>{props.title4}</li>
            <li className='hover:text-rose-400'>{props.title5}</li>
          </ul>
      </div>
    </div>
  )
}
