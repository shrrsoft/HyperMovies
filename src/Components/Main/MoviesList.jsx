import React, { useEffect, useState } from 'react'
import MoviesCard from '../Movies/MoviesCard'
import axios from 'axios'
import { apiKey, baseURL, imgBaseURL } from '../../apiConfig'

export default function MoviesList() {

  const [movies, setMovies] = useState([])

  async function loadMovies() {
    const {data} = await axios.get(`${baseURL}/popular?api_key=${apiKey}`)
    setMovies(data.results)    
  }

  useEffect(()=>{
    loadMovies()
  }, [])
   
  function posterImage (path, size="w300") {
    return (`${imgBaseURL}/${size}${path}`)
 }


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
      <swiper-container  loop="true" autoplay="false" breakpoints={breakpoints}>
        {movies.map((movie)=>(
          <swiper-slide  key={movie.id}>
            <MoviesCard movieName={movie.title} imgSrc={(posterImage(movie.poster_path))} point={movie.vote_average.toFixed(1)} />
          </swiper-slide>))}
      </swiper-container>
    </div>
    </>
  )
}
