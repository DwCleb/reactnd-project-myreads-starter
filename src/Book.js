import React from 'react' 
import PropTypes from 'prop-types' 

// Book Class
const Book = props => {
  const { book, onChangeShelf } = props
  const { imageLinks, shelf, title, authors } = book
  return (
    <div className="book">
      <div className="book-top">
      {/* Book cover imagem */}
        <div
          className="book-cover"
          styles={{
            width: 128,
            heigth: 192,
            backgroundImage: `url(${imageLinks.thumbnail})`
        }}></div>
        {/* Book options */}
        <div className="book-shelf-changer">
          <select
            value={shelf}
            onChange={ (event) => { onChangeShelf(event, book) }}
          >
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
  book: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}
export default Book

