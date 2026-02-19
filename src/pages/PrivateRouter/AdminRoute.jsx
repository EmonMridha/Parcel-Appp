import React, { Children, useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Navigate } from 'react-router';

const AdminRoute = ({ children }) => {
    const axios = useAxiosSecure();
    const [userRole, setUserRole] = useState(null)

    useEffect(() => {
        axios.get('/users/role')
            .then(response => {
                setUserRole(response.data.role)
            })
            .catch(error => {
                console.log(error);
            })

    }, [axios])

    if (userRole !== 'admin') {
        return <Navigate state={{ from: location.pathname }} to='/forbidden'></Navigate>
    }
    return children
};

export default AdminRoute;