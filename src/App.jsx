import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Home from './pages/Home/Home.jsx'
// import Error from './pages/Error/Error.jsx'
  

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(
    function(){
      if(token){
        setIsAuth(true)
      }else{
        setIsAuth(false);
        if(!location.pathname.includes('register')){
          navigate('/login')
        }
      }
    },
    [token, location.pathname]
  )
  return (
    <div>
      {
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          isAuth && {' '}
          <>
            <Route path='/' element={<Home></Home>}></Route>
          </>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      }
    </div>
  )
}

export default App