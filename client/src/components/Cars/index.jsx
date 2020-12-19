import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cars = () => {
    const { setNotification } = useContext(NotificationContext);
    const { globalStore } = useContext(GlobalStoreContext);
    const { user } = useContext(UserContext);

    const [cars, setCars] = useState([]);

    useEffect(() => {
        Axios.get(`${globalStore.REACT_APP_ENDPOINT}/cars`)
            .then(({ data }) => {
                setCars(data);
            })
            .catch(error => {
                setNotification({
                    type: "danger",
                    message: `There was an error retrieving the Car: ${error.message}`
                });
            });
    }, [globalStore, setNotification]);

    return (
        <>
            <Header title="Cars" />

            <Container>
                {cars && cars.length > 0 ? (
                    cars.map((car, i) => (
                        <>
                            <Media className="mb-3">
                                <img
                                    src="https://picsum.photos/id/1000/1010"
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                />
                                <Media.Body>
                                    
                                    <h3>{car.make}</h3>
                                    <p>
                                        <strong>Type:</strong>&nbsp;{car.car}
                                    </p>

                                    <p>
                                        <strong>Model</strong>&nbsp;{car.model}
                                    </p>
                                    <p>
                                        <strong>Launched In -</strong>&nbsp;{car.year}
                                    </p>
                                    <p>
                                        <strong>Warranty-</strong>&nbsp;{car.warranty}
                                    </p>
                                </Media.Body>
                            </Media>
                            {user && user.token ? (
                                <Link className="btn btn-primary mb-3 mr-2" to={`/cars/edit/${car._id}`}>Modify Car</Link>
                            ) : null}

                            {user && user.token ? (
                                <Link className="btn btn-danger mb-3" to={`/cars/destroy/${car._id}`}>Remove Car</Link>
                            ) : null}
                        </>
                    ))
                ) : null}
            </Container>
        </>
    );
}

export default Cars;