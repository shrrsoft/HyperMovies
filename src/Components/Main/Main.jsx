import React from 'react'
import MoviesList from './MoviesList'
import MainMenu from './MainMenu'

export default function Main() {
  return (
    <div className="container mx-auto">
      <MainMenu title1={'Movies'} title2={'Upcoming'} title3={'Now Playing'} title4={'Popular'} title5={'Top rated'}  />
      <MoviesList />
      <MainMenu title1={'TV - Series'} title2={'Popular'} title3={'Top Rated'} title4={'Airing Today'} title5={'On the Air'}  />
      <MoviesList />
    </div>
  )
}
