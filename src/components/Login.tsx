import React from 'react';
import { useState } from 'react';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        fetch('http://127.0.0.1:5500', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id_emp: id, password: password })
        })
        .then(
        // Fulfilled
            () => {
            console.log('Done')
        // Rejected
        }, () => {
            console.log('Not done')
        })


        // alert(`Employee ${id} with password ${password}`);
    }

    const handleUserId = (e: any) => setId(e.target.value)

    const handleUserPassword = (e: any) => setPassword(e.target.value)

    return (
        <>
            <form onSubmit={handleSubmit} action="/login">
                <label htmlFor="id_emp">Expediente: </label>
                <input
                    type="text"
                    name="id_emp"
                    id="id_emp"
                    onChange={handleUserId}
                />

                <label htmlFor="password">Clave: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleUserPassword}
                />
                <input type="submit" value="Acceder" />
            </form>
        </>
    );

}

export { Login }