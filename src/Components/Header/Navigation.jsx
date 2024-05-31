import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'


export default function Navigation() {
const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <>
    <nav className='flex items-center py-6 md:py-8'>
       <div className='flex items-center gap-14'>
            <div>
            <h1 className='text-2xl mr-12 md:mr-4'>Hyper<span className='text-rose-500'>Movies</span></h1>
            <p className="text-xs ml-8 text-slate-500">Reviwe Movies</p>
            </div>
        <ul className='hidden md:flex md:gap-4 gap-6 uppercase flex-wrap '>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">People</a></li>
            <li><a href="#">More</a></li>
        </ul>
       </div>
       <div className='ml-auto'>
        <ul className='hidden md:flex md:flex-col-reverse md:items-center lg:flex-row gap-8 uppercase '>
            <li><a href="#">login</a></li>
            <li><a className='text-white bg-rose-600 hover:bg-rose-500 px-6 py-2.5 rounded-2xl'  href="#">sign up</a></li>
        </ul>
       </div>
       <div className="md:hidden text-2xl">
       <button onClick={()=>setIsOpenMenu(!isOpenMenu)}>
       <FontAwesomeIcon icon={faBars} />
       </button>
       </div>
    </nav>
    <div className= {`md:hidden mx-auto bg-slate-900/70 rounded-2xl  ${isOpenMenu ?' h-full pt-4 pb-8 '  : 'h-0 p-0 overflow-auto'}`}>
      <div className='pt-4 border-t-2 border-slate-500 mx-auto w-1/2'>
        <ul className='flex flex-col justify-center items-center pb-4 gap-4'>
              <li><a href="#">Movies</a></li>
              <li><a href="#">TV Shows</a></li>
              <li><a href="#">People</a></li>
              <li><a href="#">More</a></li>
        </ul>
        <div className='pt-6 border-t-2 border-slate-500'>
          <ul className='flex items-center justify-center gap-4'>
              <li><a href="#">login</a></li>
              <li><a className='text-white bg-rose-600 hover:bg-rose-500 px-6 py-2.5 rounded-2xl'  href="#">sign up</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}
