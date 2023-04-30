import React from 'react'
import { Header, Footer } from '../components/index'
import TodoApp from '../components/TodoApp/TodoApp'
import './App.css'

const App = () => (
  <div className="App">
    <Header />
    <TodoApp />
    <Footer />
  </div>
)

export default App
