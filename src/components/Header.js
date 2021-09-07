import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar className="ps-2 my-5" color="success" light expand="md">
            <NavbarBrand href="/">Projects</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                <NavLink href="https://www.linkedin.com/in/joldon-kutmanaliev/">LinkedIn</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/Joldon">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                    Option 1
                    </DropdownItem>
                    <DropdownItem>
                    Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Reset
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            <NavbarText>JOLDON KUTMANALIEV</NavbarText>
            </Collapse>
            </Navbar>
        </div>
    )
}

export default Header
