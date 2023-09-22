import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(null);

    console.log(firstName);
    console.log(lastName);

    const sendDataToAPI = () => {
        axios.put(`https://650dccdea8b42265ec2cb5d6.mockapi.io/crud/${ID}`, {
            firstName,
            lastName
        }).then(() => {
            navigate('/read')
        })
    }

    useEffect(() => {
        // axios.get(`https://650dccdea8b42265ec2cb5d6.mockapi.io/crud/${localStorage.getItem('ID')}`)
        setFirstName(localStorage.getItem('firstName'))
        setLastName(localStorage.getItem('lastName'))
        setID(localStorage.getItem('ID'))

    }, [])
    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input
                        name='fname'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} // Use 'e' here
                        placeholder='First Name'
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        name='lname'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} // Use 'e' here
                        placeholder='Last Name'
                    />
                </Form.Field>

                <Button type='submit' onClick={sendDataToAPI}>Update</Button>
            </Form>
        </div>
    );
}
