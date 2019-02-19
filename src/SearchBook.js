import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

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
    console.log(query.length)
    if (!query) {
      this.setState({query: '', books: []})
    } else {
      this.setState({ query: query.trim() })
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          books = []
        }
        books.map(book => (this.props.booksOnShelf.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
        this.setState({books})
      })
    }
    this.setState({query: '', books: []})
  }

  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              onChange={(e) => (e.target.value.length > 0) ? this.updateQuery(e.target.value) : this.updateQuery('')}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.state.books.sort(sortBy('title'))
                  .map(book => (
                    <Book 
                      key={book.id}
                      book={book !== {} ? book : {}}
                      onMoveBook={this.props.onMoveBook}
                    />
                  ))
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