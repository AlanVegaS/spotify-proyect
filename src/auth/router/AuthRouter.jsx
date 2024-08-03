import { LoginPage } from '../pages/LoginPage';
import { Navigate } from 'react-router-dom'

export const AuthRouter = [
    {
        index: true,
        path: 'login',
        element: <LoginPage />
    },{
        path: '*',
        element: <Navigate to={'/'} />
    }
];