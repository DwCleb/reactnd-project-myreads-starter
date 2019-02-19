import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import { Debounce  } from 'react-throttle';

class Search extends Component {
  
  static propTypes = {
    booksOnShelf: PropTypes.array,
    onMoveBook: PropTypes.func.isRequired
  }

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    const { booksOnShelf } = this.props
    if (query.length < 1) {
      this.setState({query: '', books: []})
    } else {
      this.setState({ query: query.trim() })
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          books = []
        }
        books.map(book => (booksOnShelf.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
        this.setState({books})
      })
    }
    this.setState({query: '', books: []})
  }

  render () {
    const { books } = this.state
    const { onMoveBook } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
          <Debounce time="450" handler="onChange">
            <input 
              type="text" 
              placeholder="Search by title or author"
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <div className="bookshelf-books">
              <ol className="books-grid">
                { books.length > 0 
                  ?
                  books.sort(sortBy('title'))
                  .map(book => (
                    <Book 
                      key={book.id}
                      book={book}
                      onMoveBook={onMoveBook}
                    />
                  ))
                  : ('')
                }
              </ol>
            </div>
          </ol>
        </div>
      </div>
    )
  }
}

export default Search