
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './user/pages/Home'
import Contact from './user/pages/Contact'
import Books from './user/pages/Books'
import Auth from './pages/Auth'
import Profile from './user/pages/Profile'
import View from './user/pages/View'
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminResource from './admin/pages/AdminResource'
import AdminSettings from './admin/pages/AdminSettings'
import { useState } from 'react'
import Preloader from './components/Preloader'



function App() {
 const [isloading,setloading] = useState(true)

 setTimeout(() => {
  setloading(false)
 }, 3000);

  return (
    <>
      <Routes>
        <Route path='/' element={isloading ? <Preloader/> : <Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth insideRegister/>} />
        <Route path='/profile/:id' element={<Profile/>} />
        <Route path='/books/:id' element={<View/>} />
        <Route path='/admin' element={<AdminDashboard/>} />
        <Route path='/admin/resource' element={<AdminResource/>} />
        <Route path='/admin/settings' element={<AdminSettings/>} />
    
      </Routes>
    </>
  )
}

export default App
