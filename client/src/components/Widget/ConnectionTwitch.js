import React from 'react';
    
const ConnectionTwitch = () => {

    const TWITCH_OAUTH_URL = 'https://id.twitch.tv/oauth2/authorize';
    const CLIENT_ID = '25zxhtclm3nu9t8ymbwjtq4ve1gvk6';
    const REDIRECT_URI = 'http://localhost:3000/';
    const SCOPES = 'analytics:read:games+channel:manage:schedule+channel:manage:videos+channel:read:subscriptions+user:read:follows+user:read:subscriptions+user:read:email';
    const RESPONSE_TYPE = 'token';
    const STATE = 'c3ab8aa609ea11e793ae92361f002671';
    const url = `${TWITCH_OAUTH_URL}?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&state=${STATE}`;

    const hundleClick = () => {
        console.log('bidabidou');
        window.location.href = url;
    };
    return (
        <div className='h-25 w-25 bg-primary'>
            <button onClick={hundleClick}>Connection Twitch</button>
        </div>
    );
};

export default ConnectionTwitch;