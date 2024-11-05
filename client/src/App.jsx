import React, {useState} from 'react'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import SingleBlog from './pages/SingleBlog'
import BlogUpdate from './pages/BlogUpdate'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/post/:id",
        element: <SingleBlog/>
      },
      {
        path: "/update-blog",
        element: <BlogUpdate/>
      }
    ]
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  
]);

function App() {
  

  return (
    <>
    <div className='p-10   '>
      <div >
        <RouterProvider router={router}/>
      </div>
    </div>
    </>
  )
}

export default App
