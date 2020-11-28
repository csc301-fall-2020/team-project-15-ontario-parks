import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Toolbar = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand>Ontario Parks Admin</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link><Link to='/attractions'>Attractions</Link></Nav.Link>
                    <Nav.Link><Link to='/parks'>Parks</Link></Nav.Link>
                    <Nav.Link><Link to='/categories'>Categories</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Toolbar;