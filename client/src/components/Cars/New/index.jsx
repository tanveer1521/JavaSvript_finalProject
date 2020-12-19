import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
    return (
        <>
            <Header title="Cars">
                <p className="text-light">Add a New Car to Garage</p>
            </Header>

            <Container>
                <Form endpoint="cars" />
            </Container>
        </>
    );
}

export default New;