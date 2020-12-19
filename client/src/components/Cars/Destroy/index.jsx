import Axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

const Destroy = () => {
    const { id } = useParams();
    const { globalStore } = useContext(GlobalStoreContext);
    const { setNotification } = useContext(NotificationContext);

    useEffect(() => {
        Axios.post(`${globalStore.REACT_APP_ENDPOINT}/cars/destroy`, { _id: id })
            .then(() => {
                setNotification({
                    type: "success",
                    message: `The Car was removed from garage`
                });
            })
            .catch(error => {
                setNotification(`Couldn't remove the selected Car due to an error: ${error.message}`);
            });
    }, []);

    return <Redirect to="/cars" />;
}

export default Destroy;