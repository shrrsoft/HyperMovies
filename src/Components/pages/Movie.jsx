import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey, baseURL, imgBaseURL } from '../../apiConfig'

export default function Movie() {
const[movie, setMovie] = useState ([])
const {id} = useParams()

async function loadingMovie() {
  const {data} = await axios.get(`${baseURL}/${id}?api_key=${apiKey}`)
  setMovie(data)
}

useEffect(()=>{
  loadingMovie() 
}, [id])

function posterImage (path, size="w300") {
  return (`${imgBaseURL}/${size}${path}`)
}

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={(posterImage(movie.poster_path))} alt={movie.title} />
    </div>
  )
}
