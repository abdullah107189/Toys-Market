import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const PriveteRoute = ({ children }) => {
    const { user, setLoading } = useContext(authContext)
    const location = useLocation()

    if (!user) {
        return setLoading(true)
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace={true}></Navigate>
};

export default PriveteRoute;