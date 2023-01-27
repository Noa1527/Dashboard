import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import { UidContext } from '../components/Hook/AppContext';
import { Carou } from '../Helpers/CarousselData';
import { useLocation } from 'react-router-dom';
import WidgetContent from '../components/Widget/WidgetContent';


const Home = () => {
    const location = useLocation();
    const Uid = useContext(UidContext);
    if (Uid) {
        let getTokenTwitch = location.hash.split('&')[0].split('=')[1];
        localStorage.setItem("tokenTwitch", getTokenTwitch);
    }


    return (
        <>
            {Uid
                ?
                <>
                    <div className='w-100' style={{ height: '10%' }} >
                        <h1>Home</h1>
                        <WidgetContent />
                    </div>

                </>
                :
                <div className='w-100 h-100 flex-column align-items-center'>
                    <h1 className='' style={{ fontWeight: '700', fontSize: '1em' }}>widget Picker</h1>
                    <Carousel variant="dark" className='h-75 w-50 ms-auto me-auto mt-3'>
                        {
                            Carou.map((carou, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100 "
                                            src={carou.img}
                                            alt={carou.alt}
                                        />
                                    </Carousel.Item>
                                );
                            })
                        }
                    </Carousel>
                </div>
            }
        </>
    );
};

export default Home;