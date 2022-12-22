import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { ThemeContextProvider } from './Contextes/ThemeContext'
import { Container } from 'react-bootstrap'
import SortingPage from './Pages/SortingPage'
import { CookiesProvider } from 'react-cookie'
import Footer from './Components/Footer'
import NavigationBar from './Components/NavigationBar'

function App() {
  return (
    <CookiesProvider>
      <ThemeContextProvider>
        <NavigationBar />
        <Routes>
          <Route path='/sorting-algorithms' exact element={<SortingPage />} />
          <Route
            path='/sorting-algorithms/:sorting-type'
            exact
            element={<SortingPage />}
          />
        </Routes>
        <Container fluid>
          <Footer />
        </Container>
      </ThemeContextProvider>
    </CookiesProvider>
  )
}

export default App
