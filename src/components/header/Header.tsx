import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const name = '// technochorus //';
const Navigation: React.FC = () => {
    return (
        <Navbar expand="lg" fixed="top" style={{ background: 'linear-gradient(to right, #de6161, #2657eb)' }}>
            <Navbar.Brand href="#home">
                <div style={{ color: '##2657eb', fontWeight: 'bolder', fontSize: '1.25em' }}>{name}</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="pills" className="mr-auto">
                    <LinkContainer to="/profile">
                        <Nav.Link style={{ paddingLeft: '20px', paddingRight: '20px' }}>Profile</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/blogs">
                        <Nav.Link style={{ paddingLeft: '20px', paddingRight: '20px' }}>Blogs</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/agile">
                        <Nav.Link href="/agile" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                            Agile
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export const Header: React.FC = () => (
    <div style={{ width: 'auto' }}>
        <Navigation />
    </div>
);
