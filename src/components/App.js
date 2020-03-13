import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavBar";

export default function App() {
    return (
        <div className="App">
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/section1/">Section 1</Nav.Link>
                <Nav.Link href="/section2/">Section 2</Nav.Link>
            </Nav>
        </div>
    );
}
