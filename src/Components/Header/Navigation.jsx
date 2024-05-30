import React from 'react'

export default function Navigation() {
  return (
    <nav className='flex items-center pt-8'>
       <div className='flex items-center gap-14'>
            <div>
            <h1 className='text-2xl mr-12'>Hyper<span className='text-rose-500'>Movies</span></h1>
            <p className="text-xs ml-8 text-slate-500">Reviwe Movies</p>
            </div>
        <ul className='flex gap-6 uppercase flex-wrap '>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">People</a></li>
            <li><a href="#">More</a></li>
        </ul>
       </div>
       <div className='ml-auto'>
        <ul className='flex flex-wrap gap-8 uppercase'>
            <li><a href="#">login</a></li>
            <li><a className='text-white bg-rose-600 hover:bg-rose-500 px-6 py-2.5 rounded-2xl'  href="#">sign up</a></li>
        </ul>
       </div>
    </nav>
  )
}
