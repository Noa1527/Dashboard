import React, { useState } from 'react';
import ConnectionTwitch from './ConnectionTwitch';
import ApiTwitch from './ApiTwitch';
// import GetUsers from './GetUsers';
import WhoImFolloing from './WhoAreLiveing';
import WidgetBlock from './WidgetBlock';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';

const Widget = () => {
    const [showComponent, setShowComponent] = useState(false);
    console.log(showComponent);
    console.log('coucou widget');
    return (
        <>
            <Container fluid style={{ height: '91%' }}>
                <Row className='h-100'>
                    <Col className="widget-container " md={6} lg={5} xl={3}>
                        <button style={{ 
                            position: 'absolute',
                            top: '100px',
                            right: '1350px',
                            zIndex: '1',
                            border: 'none',
                            color: 'white',
                            fontSize: '1.5em',
                            fontWeight: '700',
                            cursor: 'pointer',
                            textAlign: 'center',
                            width: '50px',
                            height: '50px'
                        }} onClick={() => setShowComponent(!showComponent)}>
                            +
                        </button>
                        {showComponent &&
                        <>
                        
                        <ConnectionTwitch />
                            <WidgetBlock
                                title='twitch'
                                width={500}
                                height={300}
                            >
                                <WhoImFolloing />

                            </WidgetBlock>
                        </>
                        }
                        <WidgetBlock
                            title='twitch'
                            width={200}
                            height={200}
                        >
                            <ApiTwitch />

                        </WidgetBlock>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Widget;