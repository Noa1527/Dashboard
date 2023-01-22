import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const WhoAreLiveing = () => {
    const updateInterval = 60000;
    let mika = '218590652'
    // let wilfrid = '485807027'
    // let nico = '641517765'
    const location = useLocation();
    let token = location.hash.split('&')[0].split('=')[1];
    const [watche, setWatche] = React.useState([]);

    const fetchStream = async () => { 
       await axios({
            method: 'get',
            url: 'https://api.twitch.tv/helix/streams/followed',
            headers: {
                "client-id": "25zxhtclm3nu9t8ymbwjtq4ve1gvk6",
                "authorization": `Bearer ${token}`
            },
            params: {
                user_id: mika
            }
        })
            .then((res) => {
                console.log(res.data.data[0]);
                setWatche(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });

    };
    
    setInterval(fetchStream, updateInterval);
    return (
        <Table bordered>
            <thead>
                <tr className='text-white'>
                    <th>#</th>
                    <th>Username</th>
                    <th>Game Name</th>
                    <th>Viewer Count</th>
                </tr>
            </thead>
            <tbody>
            {(watche)
                ? watche.map((value, key) => {
                    return (
                        <tr className='text-white'key={key}>
                            <td>{key}</td>
                            <td>{value.user_name}</td>
                            <td>{value.game_name}</td>
                            <td>{value.viewer_count}</td>
                        </tr>
                    )
                })
                : null
            }
            </tbody>
        </Table>
    );
};

export default WhoAreLiveing;

// <div className='w-100 h-100 d-flex'>
                    //     <h1 className='pt-0 ms-2 me-2'></h1>
                    //     <p className='mb-0 ms-2 me-2'></p>
                    //     <p className='mb-0 ms-2 me-2'></p>
                    // </div>