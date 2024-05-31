import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react'



export default function SearchBox() {
  return (
    <section className=" mt-7">
        <div className="relative">
             <input type="text" 
             placeholder='search movies and TV Shows'
             className='w-full bg-slate-600 rounded-md p-1.5 border-slate-900 border-4 outline-none placeholder:text-slate-500 placeholder:text-sm'  />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute top-1/3 right-4 scale-150' />
        </div>
    </section>
  )
}
