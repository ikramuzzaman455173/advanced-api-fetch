// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useLoaderData } from "react-router-dom";
import Container from '../SharedComponents/Container/Container';
import htmlparser2 from "react-html-parser";
const MovieDetails = () => {
  const singleData = useLoaderData()
  console.log(`singleData`, singleData);
  const { image, name, summary } = singleData || {}

  return (
    <>
      <Container>
        <div className='card-body my-5 border border-2 shadow rounded p-4'>
          <img src={image ? image.original : 'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?size=626&ext=jpg'} width={'100%'} height={768} className='rounded shadow' alt="show image" />
          <div className="card-title fs-1 text-center mt-2 fw-bold" style={{ letterSpacing: '1px' }}>{name ? name : 'Show Title Not Found'}</div>
          <div className="card-text">{htmlparser2(summary?summary:'No Details Found')}</div>
        </div>
      </Container>

    </>
  )
}

export default MovieDetails