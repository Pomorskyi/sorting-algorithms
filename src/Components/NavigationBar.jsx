import React, { useContext } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { ThemeContext } from '../Contextes/ThemeContext';
import useBoard from './sorting/useBoardHook';
import './NavigationBar.css'

const NavigationBar = () => {
  const { navTitle } = useBoard();
  const { onChangeTheme, darkActive } = useContext(ThemeContext)

  return (
    <Navbar expand="lg" className="navbar_theming">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={navTitle} id="basic-nav-dropdown">
              <NavDropdown.Item href="/selection-sort">
                Selection sort
              </NavDropdown.Item>
              <NavDropdown.Item href="/bubble-sort">
                Bubble sort
              </NavDropdown.Item>
              <NavDropdown.Item href="/insertion-sort">
                Insertion sort
              </NavDropdown.Item>
              <NavDropdown.Item href="/merge-sort">
                Merge sort
              </NavDropdown.Item>
              <NavDropdown.Item href="/quick-sort">
                Quick sort
              </NavDropdown.Item>
              <NavDropdown.Item href="/heap-sort">
                Heap sort
              </NavDropdown.Item>
              <NavDropdown.Item href="/counting-sort">
                Counting sort
              </NavDropdown.Item>
              <NavDropdown.Item href="/radix-sort">
                Radix sort
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                About sorting
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='theming_change_btn'>
            <input type="checkbox" onChange={onChangeTheme} defaultChecked={darkActive}/> isDark
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar