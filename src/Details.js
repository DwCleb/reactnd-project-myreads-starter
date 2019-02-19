import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

const customStyles = {
  content : {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '75%',
    height: '550px',
    transform: 'translate(-50%, -50%)',
  }
};

Modal.setAppElement('#root')

const Details = props => {
  const { book, modalIsOpen, closeModal } = props
  const { imageLinks } = book
  return (
    <div style={{ zIndex: 100 }}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Details Modal"
      >
        <button onClick={closeModal} className="close-modal">close</button>
        <div
          className="details-grid"
        >
          <div className="details-column-1">
            <div
              className="details-book-cover"
              style={{
                width: 150,
                height: 200,
                backgroundImage: `url(${imageLinks !== undefined ? imageLinks.thumbnail : ''})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundColor: 'transparent',
              }}
            ></div>
          </div>
          
          <div className="details-column-2">
            <p>
              <span className="details-field">Title </span>
              <br></br>
              <span className="details-value">{book.title}</span>
            </p>
            <p>
              <span className="details-field">Subtitle </span>
              <br></br>
              <span className="details-value">{book.subtitle}</span>
            </p>
            <p>
              <span className="details-field">Authors </span>
              <br></br>
              <span className="details-value">{book.authors}</span>
            </p>
            
            <p>
              <span className="details-field">Categories </span>
              <br></br>
              <span className="details-value">{book.categories}</span>
            </p>
            
            <p>
              <span className="details-field">Publisher </span>
              <br></br>
              <span className="details-value">{book.publisher}</span>
            </p>

          </div>

          <div className="details-column-3">
            <p>
              <span className="details-field">Published Date</span>
              <br></br>
              <span className="details-value">{book.publishedDate}</span>
            </p>
            <p>
              <span className="details-field">Pages</span>
              <br></br>
              <span className="details-value">{book.pageCount}</span>
            </p>
            <p>
              <span className="details-field">Identifiers</span>
              <br></br>
              <span className="details-value">{book.industryIdentifiers.map(id => (`${id.type}: ${id.identifier}\n`))}</span>
            </p>
            <p>
              <span className="details-field">Language</span>
              <br></br>
              <span className="details-value">{book.language}</span>
            </p>
            
          </div>

          <div className="details-column-4">
            <center>
              <a className="details-button" href={book.infoLink} target="_blank" rel="noopener noreferrer">Info</a>
              <a className="details-button" href={book.previewLink} target="_blank" rel="noopener noreferrer">Preview</a>
              <a className="details-button" href={book.canonicalVolumeLink} target="_blank" rel="noopener noreferrer">Canonical Volume</a>
            </center>
          </div>
          <div className="details-column-4">
            <p>
              <span className="details-field">Description </span>
              <br></br>
              <span className="details-value">{book.description}</span>
            </p>
          </div>
      
        </div>
      </Modal>
    </div>
  );
}

Details.propTypes = {
  book: PropTypes.object.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default Details