import React from 'react'
import Headroom from 'react-headroom'

const Header = props => {
  return (
    <Headroom>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
    </Headroom>
  )
}

export default Header