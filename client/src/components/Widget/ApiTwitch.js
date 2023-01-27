import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ApiTwitch = () => {
    const [follows, setFollows] = React.useState([]);
    // let mika = '218590652'
    // let wilfrid = '485807027'
    let nico = '641517765'
    const location = useLocation();
    let token = location.hash.split('&')[0].split('=')[1];
    useEffect(() => {
        const fetchData = async () => {
    await axios({
        method: 'get',
        url: 'https://api.twitch.tv/helix/users/follows',
        headers: {
                "client-id": "25zxhtclm3nu9t8ymbwjtq4ve1gvk6",
                "authorization": `Bearer ${token}`
        },
        params: {
            to_id: nico
        }
    })
    .then((res) => {
        console.log(res);
        setFollows(res.data.total);
    })
    .catch((err) => {
        console.log(err);
    });
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>j'ai: {follows} followers</h1>
        </div>
    );
};

export default ApiTwitch;