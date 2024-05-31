import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react'



export default function SearchBox() {
  return (
    <section className=" mt-7">
        <div className="relative">
             <input type="text" 
             placeholder='search movies and TV Shows'
             className='w-full bg-slate-900/70 rounded-md p-2 border-slate-500 border-2 outline-none placeholder:text-slate-500 placeholder:text-sm'  />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-slate-400 absolute top-1/3 right-4 scale-150' />
        </div>
    </section>
  )
}
