import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

const MovieCards = () => {
  const [movieData, setMovieData] = useState([])
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`).then(response => response.json()).then(data => {
      // console.log(data)
      setMovieData(data)
    }).catch(error => console.log(`404 page not found ${error}`))
  }, [])
  return (
    <>
      {/* TODO: Add movie cards here */}
      <div className="w-100 text-center mt-5">
        <button className="btn btn-info text-white  fw-bold text-center">Show Filter</button>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4">
        {movieData?.map(movie => <MovieCard key={movie.show.id} movie={movie} />)}
      </div>
    </>
  )
}


export default MovieCards