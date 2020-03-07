// Core
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components

// Styles
// import S from './styles';

// Instruments

const Home = () => {
    return (
        <div>
            <p>KEK MAIN</p>
            <div><Link to="/register">Register</Link></div>
            <div><Link to="/login">Login</Link></div>
        </div>
    );
};
// Home

export default Home;
