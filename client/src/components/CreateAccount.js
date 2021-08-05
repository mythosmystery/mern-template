import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import { Button, Form } from 'react-bootstrap';

function CreateAccount({ route }) {
   const [formState, setFormState] = useState({ email: '', username: '', password: '', name: '' });
   const [addUser, { error }] = useMutation(ADD_USER);

   const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
         const { data } = await addUser({
            variables: {
               userInput: { ...formState },
            },
         });
         data ? console.log(data) : console.log(error);
         const token = data.addUser.token;
         Auth.login(token, route);
      } catch (err) {
         console.error(err);
      }
   };

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
         ...formState,
         [name]: value,
      });
   };

   return (
      <div>
         <h1>Create Account</h1>
         <p>Please enter your information to create an account.</p>

         <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
               <Form.Label>Full Name </Form.Label>
               <Form.Control required type="text" name="name" placeholder="Enter your name" onChange={handleChange} value={formState.name} />
            </Form.Group>

            <Form.Group className="mb-3">
               <Form.Label>Username </Form.Label>
               <Form.Control required type="text" name="username" placeholder="Enter username" onChange={handleChange} value={formState.username} />
            </Form.Group>

            <Form.Group className="mb-3">
               <Form.Label>Email address </Form.Label>
               <Form.Control required type="email" name="email" placeholder="Enter email" onChange={handleChange} value={formState.email} />
               <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
               <Form.Label>Password </Form.Label>
               <Form.Control required type="password" name="password" placeholder="Password" onChange={handleChange} value={formState.password} />
            </Form.Group>

            <Form.Group className="mb-3">
               <Form.Check required type="checkbox" label="I agree to terms & service" />
            </Form.Group>

            <Button disabled={!(formState.email && formState.password && formState.username && formState.name)} type="submit" variant="success">
               Create Accout!
            </Button>
         </Form>
      </div>
   );
}

export default CreateAccount;
