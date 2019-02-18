import React from 'react' 
import PropTypes from 'prop-types' 

// Book Class
const Book = props => {
  const { book, onMoveBook } = props
  const { imageLinks, shelf, title, authors } = book
  return (
    <div className="book">
      <div className="book-top">
      {/* Book cover imagem */}
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks !== undefined ? imageLinks.thumbnail : ''})` }}></div>
        {/* Book options */}
        <div className="book-shelf-changer">
          <select
            value={shelf}
            onChange={ (event) => { onMoveBook(event, book) }}
          >
            <option value="" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      {/* Book information: Title and Authors */}
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onMoveBook: PropTypes.func.isRequired
}
export default Book

