import React, { useEffect, useState } from 'react'
import MoviesCard from '../Movies/MoviesCard'
import axios from 'axios'
import { apiKey, baseURL } from '../../apiConfig'

export default function MoviesList() {

  const [movies, setMovies] = useState([])
  async function loadMovies() {
    const {data} = await axios.get(`${baseURL}/popular?api_key=${apiKey}`)
    setMovies(data.results)    
  }

  useEffect(()=>{
    loadMovies()
  }, [])
   

 const breakpoints=JSON.stringify({ 

  640:{
    slidesPerView: 2,
    spaceBetween: 20,
},

768: {
    slidesPerView: 3,
    spaceBetween: 40,
},

1024: {
    slidesPerView: 5,
    spaceBetween: 10,
}
}) 


  return (
    <>
    <div>
      <swiper-container   autoplay="true" loop="true" breakpoints={breakpoints}>
        {movies.map((movie)=>(
          <swiper-slide  key={movie.id}>
            <MoviesCard movie={movie} />
          </swiper-slide>))}
      </swiper-container>
    </div>
    </>
  )
}

