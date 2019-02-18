import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import sortBy from 'sort-by'

const BookList = props => {

  const shelves = ["currentlyReading", "wantToRead", "read"]
  const shelveNames = ["Currently Reading", "Want To Read", "Read"]
  return (
    <div>
      {shelves.map((shelf, index) => {
        return(
          <div key={index} className="list-books-content">
            <div>
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelveNames[index]}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {props.books.sort(sortBy('title'))
                        .filter(book => book.shelf === shelf)
                        .map(book => (
                          <Book 
                            onMoveBook={props.onMoveBook}
                            key={book.id}
                            book={book}
                          />
                        ))
                      }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      )}
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onMoveBook: PropTypes.func.isRequired,
}

export default BookList