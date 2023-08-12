// eslint-disable-next-line no-unused-vars
import React from 'react'
import propTypes  from 'prop-types'
const Container = ({ children}) => {
  return (
    <>
      <div className='container-lg'>
        {children}
      </div>
    </>
  )
}


Container.propTypes  = {
  children:propTypes.node.isRequired,
}

export default Container