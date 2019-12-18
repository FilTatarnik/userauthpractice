import React, { Component } from 'react';
import { Form, Form_Group, Form_Label, Form_Control, Form_Text, Form_Check, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class LoginForm extends Component {
    render(){
        return(
            <Form>
            	<Form.Group controlId="formBasicEmail">
            		<Form.Label>Email</Form.Label>
            		<Form.Control type="email" placeholder="Enter Email" />
            		<Form.Text className="text-muted">
            			We'll never share your email with anyone else.
            		</Form.Text>
            	</Form.Group>
            	<Form.Group controlId="formBasicPassword">
            		<Form.Label>Password</Form.Label>
            		    <Form.Control type="email" placeholder="Enter Email" />
            	</Form.Group>
            	<Form.Group controlId="formBasicCheckbox">
            		<Form.Check type="checkbox" label="Check me out" />
            	</Form.Group>
            	<Button varient="primary" type="submit">
            	submit
            	</Button>
            </Form>
        )
    }
}
export default LoginForm;
