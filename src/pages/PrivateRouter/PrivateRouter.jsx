import React from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation(); //saves the path where the user tried to go before login

    if (loading) {
        return <div>Loading...</div>
    }


    if (!user) {
        return <Navigate to='/auth/login' state={{ from: location.pathname }} replace />
    }

    return children

};

export default PrivateRouter;