import React from 'react';
import { useState } from 'react';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_emp: id,
                password: password
            })
        })
            .then(
                () => {
                    // Next route
                }, () => {
                    alert('Incorrect data');
                })

        // Reset form after submit
        setId('');
        setPassword('');
    }

    const handleUserId = (e: any) => setId(e.target.value)
    const handleUserPassword = (e: any) => setPassword(e.target.value)

    return (
        <>
            <form onSubmit={handleSubmit} action="/login">
                {/* Id input */}
                <label htmlFor="id_emp">Expediente: </label>
                <input
                    type="text"
                    name="id_emp"
                    id="id_emp"
                    onChange={handleUserId}
                    // Adopt state value to reset after submit
                    value={id}
                />
                {/* Password input */}
                <label htmlFor="password">Clave: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleUserPassword}
                    // Adopt state value to reset after submit
                    value={password}
                />
                {/* Submit */}
                <input type="submit" value="Acceder" />
            </form>
        </>
    );

}

export { Login }