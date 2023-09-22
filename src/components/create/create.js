import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';


export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const sendDataToAPI = () => {
        axios.post(`https://650dccdea8b42265ec2cb5d6.mockapi.io/crud`, {
            firstName,
            lastName
        })
    }
    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input
                        name='fname'
                        onChange={(e) => setFirstName(e.target.value)} // Use 'e' here
                        placeholder='First Name'
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        name='lname'
                        onChange={(e) => setLastName(e.target.value)} // Use 'e' here
                        placeholder='Last Name'
                    />
                </Form.Field>

                <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
            </Form>
        </div>
    );
}
