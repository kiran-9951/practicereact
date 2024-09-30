// src/LocalStorageForm.js
import React, { useState } from 'react';

const LocalStorageForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [storedData, setStoredData] = useState([]);

    const saveToLocal = () => {
        const newUser = {
            username: username,
            password: password
        };

        // Retrieve current users array from Local Storage
        const currentUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Add new user to the array
        currentUsers.push(newUser);

        // Save updated users array to Local Storage
        localStorage.setItem('users', JSON.stringify(currentUsers));

        alert('Data saved to Local Storage');
        setUsername('');
        setPassword('');
    };

    const getFromLocal = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        setStoredData(users);
    };

    return (
        <div>
            <h2>Local Storage Example: Username and Password</h2>
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter username" 
            /><br/><br/>
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter password" 
            /><br/><br/>
            <button onClick={saveToLocal}>Save to Local Storage</button>
            <button onClick={getFromLocal}>Get from Local Storage</button>
            <div>
                <h3>Stored Users:</h3>
                {storedData.length > 0 ? (
                    <ul>
                        {storedData.map((user, index) => (
                            <li key={index}>Username: {user.username}, Password: {user.password}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No data found in Local Storage</p>
                )}
            </div>
        </div>
    );
};

export default LocalStorageForm;
