import React from 'react';
import ConnectionTwitch from './ConnectionTwitch';
import ApiTwitch from './ApiTwitch';
import GetUsers from './GetUsers';
import WhoImFolloing from './WhoAreLiveing';
import WidgetBlock from './WidgetBlock';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';

const index = () => {
    return (
        <>
            <Container fluid style={{ height: '91%' }}>
                <Row className='h-100'>
                    <Col className="widget-container " md={6} lg={5} xl={3}>
                        <WidgetBlock
                            title='twitch'
                            width={500}
                            height={300}
                        >
                            <WhoImFolloing />

                        </WidgetBlock>
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
            <ConnectionTwitch />
        </>
    );
};

export default index;