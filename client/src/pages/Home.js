import React from 'react';
import { useLocation } from 'react-router-dom';
import Widget from '../components/Widget';
const Home = () => {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <h1>Home</h1>
            <div>
                <h1>Current pathname: {location.hash}</h1>
                <h1>Current search: {location.search}</h1>
                <h1>Current state: {location.state}</h1>
            </div>
            <Widget />
        </>
    );
};

export default Home;