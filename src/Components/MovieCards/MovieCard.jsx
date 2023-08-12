// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
// eslint-disable-next-line react/prop-types
const MovieCard = ({ movie }) => {
  // eslint-disable-next-line react/prop-types
  const { image,name,summary,externals} = movie.show || {}
  // console.log(`image`,image?image.original:'');

  return (
    <>
      <div className="col">
        <div className="card p-2">
          <img src={image?image.original:'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?size=626&ext=jpg'} height={350} className="rounded-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">{name?name:'No Show Title Found...'}</h5>
            <p className="card-text">{ReactHtmlParser(summary.slice(0,100))}</p>
            <Link to={`Show/${externals.thetvdb}`} className='btn btn-outline-danger w-100 fw-bold mt-auto'>Show More Info</Link>
          </div>
        </div>
      </div>
    </>
  )
}



export default MovieCard