import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Search from './components/Search'
import Header from './components/Header'
import IntroPost from './components/IntroPost'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      
      <Header/>
      <Search/>
      <IntroPost/>
      <Blogs/>
      <Footer/>
    </>
  )
}

export default App
