import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/index';
import BlogPage from '../pages/blog';
import BlogDetailPage from '../pages/blogDetail';
import ProfilePage from '../pages/profile';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import PrivateRoutes from '../middlewares/private_routes';


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<PrivateRoutes><BlogPage /></PrivateRoutes>} />
            <Route path="/blog/:id" element={<PrivateRoutes><BlogDetailPage /></PrivateRoutes>} />
            <Route path="/profile" element={<PrivateRoutes><ProfilePage /></PrivateRoutes>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}

export default Router