import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function MoviesCard({movieName, imgSrc, point}) {
    const[opacityImg, SetOpacityImg] =useState ("" & false)
  return (
    <div className='w-fit relative m-5 text-slate-300 bg-gradient-to-t from-slate-900 via-slate-700 to-slate-900 mx-auto rounded-lg p-1.5 ' >
        <div onMouseMove={(e)=>SetOpacityImg('opacity-20')}  onMouseLeave={(e) => SetOpacityImg("")}>
        <img className={`h-80 transition-all delay-50 duration-500 ${opacityImg}`} src={imgSrc} alt="" />
        <button className={` top-32 left-12 ${opacityImg ? 'absolute ' : 'hidden'}`}>
            <a className='text-white bg-gradient-to-br from-rose-900 to-rose-500 px-6 py-2.5 rounded-xl flex '  href="#">Read More</a></button>
        </div>

        <div className='mt-2 ml-1'>
            <span className='mr-2' ><FontAwesomeIcon icon={faStar} className='text-yellow-600 ' /> </span>
            <span>{point}/10</span>
        </div>
        <div>
            <h3 className='ml-1'>{movieName}</h3>
        </div>
    </div>
  )
}

