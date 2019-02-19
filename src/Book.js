import React, { Component } from 'react' 
import PropTypes from 'prop-types' 
import Details from './Details'

// Book Class
class Book extends Component{
  static propTypes = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  state = {
    isOpenModal: false,
  }

  openModal = () => {
    this.setState({isOpenModal: true});
  }
  
  closeModal = () => {
    this.setState({isOpenModal: false});
  }

  render() {
    const { isOpenModal } = this.state
    const { book, onMoveBook } = this.props
    const { imageLinks, shelf, title, authors } = book
    return (
      <div className="book">
        <div className="book-top">
        {/* Book cover imagem */}
          <div
            className="book-cover"
            onClick={this.openModal} 
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageLinks !== undefined ? imageLinks.thumbnail : ''})`,
              cursor: 'pointer',
            }}
          ></div>
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
        <Details
          book={book}
          modalIsOpen={isOpenModal}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}

export default Book

