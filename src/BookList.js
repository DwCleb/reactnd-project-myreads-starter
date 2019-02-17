import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookList = props => {
  const shelf_name = ["Currently reading", "Want to Read", "Read", "None"]
  const shelf_types = ["currentlyReading", "wantToRead", "read", "none"]
  
  const { books, onChangeShelf } = props
  
  const shelf = shelf_types.map(
    (title, index) => {
      const books = (books != undefined && books instanceof Array)
                    && (books.filter((book) => book.shelf === title))
      return (
        <div key={title} className="book-shelf-detail">
          <p> Book shelf Name: {shelf_name[index]} </p>
          <ol className="book-grid">
            { books != undefined &&
              books.length !== 0 &&
                books.map((book, index)=> {
                  return (
                    <li key={index}>
                      <Book book={book} onChangeShelf={onChangeShelf} />
                    </li>
                  )
                })  
            }
          </ol>
        </div>
      )
    }
  )

  return (
    <div className="book-list">
      {shelf}
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default BookList