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

const App = () => {
  return (
    <>
      <Grid sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
        margin: -1,
      }}>
        <TopBarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <FooterComponent />
      </Grid>
    </>
  )
}

export default App