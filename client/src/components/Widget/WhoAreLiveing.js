import React, { useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import ConnectionTwitch from './ConnectionTwitch';

const WhoAreLiveing = () => {
    const [watche, setWatche] = React.useState([]);
    const [tokenTwitch, setTokenTwitch] = React.useState(null);
    // console.log('-------'+watche);
    const updateInterval = 60000;
    const updateIntervalStart = 600;
    let mika = '218590652'

    // let wilfrid = '485807027'
    // let nico = '641517765'
    useEffect(() => {
        if(localStorage.getItem("tokenTwitch") === "undefined" || localStorage.getItem("tokenTwitch") === null){
            // console.log('coucou');
        } else{
            setTokenTwitch(localStorage.getItem("tokenTwitch"));
        }
    }, [tokenTwitch]);

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
    // if (tokenTwitch ) {
    //     console.log('bidabidou');
    // }
    // console.log(tokenTwitch);
    // console.log(typeof tokenTwitch);
    // console.log('tokenTwitch'+tokenTwitch);
    // if (tokenTwitch) {
    //     if (watche.length === 0) {
    //         console.log('600ms');
    //     } else {
    //         console.log('600000ms');
    //     }
    // }

    if (tokenTwitch) {
        if (watche.length === 0) {
            setInterval(fetchStream, updateIntervalStart);
        } else {
            setInterval(fetchStream, updateInterval);
        }
    }


    return (
        <>
            {/* {tokenTwitch ? 'lol' : 'ok'} */}
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