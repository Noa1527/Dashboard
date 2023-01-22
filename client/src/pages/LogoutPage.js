import React from 'react';
import axios from 'axios';

const LogoutPage = () => {

   const token = localStorage.getItem('token');
    console.log(token);
    console.log('coucou')

    const handlelogout = (e) => {
        e.preventDefault();

        axios({
            method: 'post',
            url: `http://127.0.0.1:8000/api/logout`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                localStorage.removeItem('token');
                window.location.href = '/';
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='d-flex justify-content-center flex-column align-items-center py-2 px-2 mb-4'>
            <h3 className='text-light'>Se Déconnecter</h3>
            <button className='ps-4 pe-4 w-25 ' onClick={handlelogout} variant="outline-danger">Deconnexion</button>
        </div>
    );
};

export default LogoutPage;