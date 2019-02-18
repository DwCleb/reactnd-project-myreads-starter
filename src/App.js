import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Header from './Header'
import BookList from './BookList'
import SearchBook from './SearchBook'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    searchQuery: '',
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  onMoveBook = (event, book) => {
    const { searchQuery } = this.state
    BooksAPI.update(book, event.target.value).then(
      () => {
        BooksAPI.getAll().then(
          books => {
            this.setState({ books })

            if (searchQuery.length !== 0) {
              this.onSearchBook(searchQuery)
            }
          }
        )
      }
    )
  }

  render() {
    const { books, } = this.state
    return (
      <div className="app">
        <Route
          path='/search'
          render={() => (
            <SearchBook
              onMoveBook={this.onMoveBook}
              booksOnShelf={books}
            />
          )}
        />

       <Route
          exact path='/'
          render={() => (
            <div className="list-books">
              <Header />
              <BookList
                books={books}
                onMoveBook={this.onMoveBook}
              />
              <div className="open-search">
                <Link className="button-open-search" to="/search">
                  Add a book
                </Link>
              </div>
            </div>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
