import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const GetUsers = () => {
    let mika = '218590652'
    let wilfrid = '485807027'
    const location = useLocation();
    let token = location.hash.split('&')[0].split('=')[1];
    axios({
        method: 'get',
        url: 'https://api.twitch.tv/helix/users',
        headers: {
                "client-id": "25zxhtclm3nu9t8ymbwjtq4ve1gvk6",
                "authorization": `Bearer ${token}`
                
        },
        params: {
            // id: wilfrid
            login: 'DocNap'
        }
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

    return (
        <div>
            getusers
        </div>
    );
};

export default GetUsers;