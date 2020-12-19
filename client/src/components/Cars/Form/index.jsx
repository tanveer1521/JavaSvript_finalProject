import React, { useContext, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { NotificationContext } from '../../shared/Notifications';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

const CarForm = ({ endpoint, preload, buttonLabel }) => {
   
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);
    const { setNotification } = useContext(NotificationContext);
    const { user } = useContext(UserContext);
    const { globalStore } = useContext(GlobalStoreContext);

    useEffect(() => {
        setInputs({ ...preload });
    }, [preload])

    const handleChange = event => {
        event.persist();
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(inputs);

        Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
            ...inputs,
            secret_token: (user && user.token)
        })
            .then(({ data }) => {
                if (data) {
                    setNotification({
                        type: "success",
                        message: "The Car was modified successfully"
                    });
                }

                setRedirect(true);
            })
            .catch((error) => {
                setNotification({
                    type: "danger",
                    message: `There was an error modifing the Car: ${error.message}`
                });
            });
    };

    if (redirect) return <Redirect to="/cars" />;
    return (
        <Form onSubmit={handleSubmit}>
            <p>
                Please enter the Car details.
            </p>

            <Form.Group>
                <Form.Label>Car Type</Form.Label>
                <Form.Control
                    name="car"
                    onChange={handleChange}
                    placeholder="Eg. Hatchback SUV "
                    required
                    defaultValue={inputs.car}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Company</Form.Label>
                <Form.Control
                    name="company"
                    onChange={handleChange}
                    placeholder="Ex. Audi, BMW"
                    required
                    defaultValue={inputs.make}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Model</Form.Label>
                <Form.Control
                    name="model"
                    onChange={handleChange}
                    placeholder="R8, X4.."
                    required
                    defaultValue={inputs.model}
                />
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Year</Form.Label>
                <Form.Control
                    name="year"
                    onChange={handleChange}
                    placeholder="Ex. 2018, 2019"
                    required
                    defaultValue={inputs.year}
                />
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Warranty</Form.Label>
                <Form.Control
                    name="warranty"
                    onChange={handleChange}
                    required
                    defaultValue={inputs.warranty}
                />
            </Form.Group>
            
            <button type="submit" className="btn btn-primary">{buttonLabel || "Add Car to Garage"}</button>
        </Form>
    );
}

export default CarForm;