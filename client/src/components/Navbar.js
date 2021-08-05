import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AccountModal from '../modals/AccountModal';
import Auth from '../utils/auth';

const AppNavbar = ({ authRoute }) => {
   // set modal display state
   const [showAccountModal, setShowAccountModal] = useState(false);

   return (
      <>
         <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container fluid>
               <Navbar.Brand as={Link} to="/">
                  Mern Template Site
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="navbar" />
               <Navbar.Collapse id="navbar">
                  <Nav className="ml-auto">
                     <Nav.Link as={Link} to="/">
                        Home
                     </Nav.Link>
                     {/* if user is logged in show logout */}
                     {Auth.loggedIn() ? (
                        <>
                           <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                        </>
                     ) : (
                        <Nav.Link onClick={() => setShowAccountModal(true)}>Login/Sign Up</Nav.Link>
                     )}
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <AccountModal showModal={showAccountModal} onHide={() => setShowAccountModal(false)} authRoute={authRoute} />
      </>
   );
};

export default AppNavbar;
