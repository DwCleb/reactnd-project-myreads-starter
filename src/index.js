import React from 'react'
import ReactDOM from 'react-dom'
import BookApp from './App'
import { BrowserRouter } from 'react-router-dom' 
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <BookApp />
  </BrowserRouter>,
  document.getElementById('root')
)
