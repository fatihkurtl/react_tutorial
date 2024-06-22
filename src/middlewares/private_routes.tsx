import { PropsWithChildren, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from "../features/auth";

type PrivateRouteProps = PropsWithChildren;

export default function PrivateRoute({ children }: PrivateRouteProps) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        console.log(location, 'location');
        const token = localStorage.getItem('token');
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (token && isAuthenticated && location.pathname === '/register') navigate('/');
        if (!token && !isAuthenticated) {
            navigate('/login');
        } else {
            dispatch(login(token));
        }
    }, [dispatch, navigate, location]);

    return <>{children}</>;
}