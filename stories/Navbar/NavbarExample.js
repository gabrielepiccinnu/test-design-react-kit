import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from '../../src'

const NavbarExample = () => {
  const [openNav, setOpenNav] = useState(false)
  const toggle = () => {
    setOpenNav(!openNav)
  }
  return (
    <section>
      <Navbar expand="lg">
        <NavbarBrand />
        <NavbarToggler className="custom-navbar-toggler" onClick={toggle}>
          <span className="it-list" />
        </NavbarToggler>

        <Collapse isOpen={openNav} navbar>
          <Nav navbar className="mt-0">
            <NavItem active>
              <NavLink active href="#">
                link 1 active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                link 2 disabilitato
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">link 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">link 4</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">link 5</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">link 6</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </section>
  )
}

export default NavbarExample
