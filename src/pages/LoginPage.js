import { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Body from '../components/Body';
import InputField from '../components/InputField';

export default function LoginPage() {
    const [formErrors, setFormErrors] = useState({});
    const userNameField = useRef();
    const passwordField = useRef();

    useEffect(() => {
        userNameField.current.focus();
    }, []);

    const onSubmit = (ev) => {
        ev.preventDefault();
        const username = userNameField.current.value;
        const password = passwordField.current.value;

        const errors = {};
        if (!username) {
            errors.username = 'Username must not be empty.';
        }
        if (!password) {
            errors.password = 'Pasword must not be empty.';
        }
        setFormErrors(errors);
        if (Object.keys(errors).length > 0) {
            return;
        }

        console.log(`You entered ${username}:${password}`);
    };

    return (
        <Body>
            <h1>Login form</h1>
            <Form onSubmit={onSubmit}>
                <InputField 
                    name="username" label="Username or email address"
                    error={formErrors.username} fieldRef={userNameField}/>
                <InputField 
                    name="password" label="Password" type="password"
                    error={formErrors.password} fieldRef={passwordField}/>
                <Button variant="primary" type="submit">Login</Button>
            </Form>
        </Body>
    );
}