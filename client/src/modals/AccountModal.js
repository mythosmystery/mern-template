import React from 'react';
import { Modal, Tab, Nav } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
const AccountModal = ({ showModal, onHide }) => {
   return (
      <Modal size="lg" show={showModal} onHide={onHide} aria-labelledby="account-modal">
         {/* tab container to either create account or login component */}
         <Tab.Container defaultActiveKey="login">
            <Modal.Header closeButton>
               <Modal.Title id="signup-modal">
                  <Nav variant="pills">
                     <Nav.Item>
                        <Nav.Link eventKey="login">Login</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="signup">Create Account</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Tab.Content>
                  <Tab.Pane eventKey="login">
                     <LoginForm handleModalClose={onHide} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="signup">
                     <SignupForm handleModalClose={onHide} />
                  </Tab.Pane>
               </Tab.Content>
            </Modal.Body>
         </Tab.Container>
      </Modal>
   );
};
export default AccountModal;
