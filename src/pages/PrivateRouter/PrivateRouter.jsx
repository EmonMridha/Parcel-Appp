import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to='/auth/login' state={{ from: location }} replace />
    }

    return children

};

export default PrivateRouter;