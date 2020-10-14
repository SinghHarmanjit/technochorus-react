import React from 'react';
import { Accordion, Card, Image } from 'react-bootstrap';

const Architectures: React.FC = () => {
    return (
        <div style={{ width: '90%', display: 'flex', flexDirection: 'column' }}>
            <p style={{ marginTop: '1em' }}>
                <b>System flow diagrams for some applications:</b>
            </p>
            <Accordion style={{ width: '100%' }}>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            1. System flow diagram: A internet facing portal running on AWS cloud with thousands of
                            daily user logins
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Image style={{ width: '95%' }} src="Portal.svg"></Image>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            2. System flow diagram: Large ERP implementation with multiple systems
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Image style={{ width: '95%' }} src="LargeERP.svg"></Image>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            3. System flow diagram: EOD batches
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <Image style={{ width: '95%' }} src="BatchSystem.svg"></Image>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default Architectures;
