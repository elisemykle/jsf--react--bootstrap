import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function App() {
    return (
        <div className="App">
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="/">Website Name</Navbar.Brand>
                <Navbar.Toggle aria-controls="mainNav" />
                <Navbar.Collapse id="mainNav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/section1/">Section 1</Nav.Link>
                        <Nav.Link href="/section2/">Page 2</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
