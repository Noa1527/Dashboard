import React, { useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import ConnectionTwitch from './ConnectionTwitch';

const WhoAreLiveing = () => {
    const [watche, setWatche] = React.useState([]);
    const [tokenTwitch, setTokenTwitch] = React.useState(null);
    
    const updateInterval = 60000;
    const updateIntervalStart = 600;
    let intervalId = null;
    let mika = '218590652'

    // let wilfrid = '485807027'
    // let nico = '641517765'

    useEffect(() => {
        if(localStorage.getItem("tokenTwitch") === "undefined" || localStorage.getItem("tokenTwitch") === null){
        } else{
            setTokenTwitch(localStorage.getItem("tokenTwitch"));
        }
        if (intervalId > 20) {
            console.log( intervalId);
            clearInterval(intervalId);
        }
    }, [intervalId]);

    const fetchStream = async () => {

        await axios({
            method: 'get',
            url: 'https://api.twitch.tv/helix/streams/followed',
            headers: {
                "client-id": "25zxhtclm3nu9t8ymbwjtq4ve1gvk6",
                "authorization": `Bearer ${tokenTwitch}`
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
    //fetchStream();

    if (tokenTwitch) {
        if (watche.length === 0) {
            intervalId = setInterval(fetchStream, updateIntervalStart);
            console.log('600ms');
        } else {
            intervalId = setInterval(fetchStream, updateInterval);
            console.log('60000ms');

        }
       
    }


    return (
        <>
            {tokenTwitch 
                ? (
                    <Table bordered>
                        <thead>
                            <tr className='text-darck'>
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
                                        <tr className='text-darck' key={key}>
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
                )
                :
                (
                    <>
                        <div className="content-button">
                            <div className='text-white'>Please login to see the list of streamers</div>
                            <ConnectionTwitch />
                        </div>
                    </>
                )

            }
        </>

    );
};

export default WhoAreLiveing;