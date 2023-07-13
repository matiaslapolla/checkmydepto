import React from 'react'
import { TopBarComponent } from './Components/top-bar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import FooterComponent from './Components/footer'
import { Grid } from '@mui/material'
import AfterSignin from './Pages/AfterSignin'
import AfterSignup from './Pages/AfterSignup'

const App = () => {
  return (
    <>
      <Grid sx={{
        margin: -1,
      }}>
        <TopBarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aftersignin" element={<AfterSignin />} />
          <Route path="/aftersignup" element={<AfterSignup />} />
        </Routes>
        <FooterComponent />
      </Grid>
    </>
  )
}

export default App