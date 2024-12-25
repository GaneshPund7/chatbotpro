import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ScreenLoader } from '@/components/loaders';
import { useAuthContext } from './useAuthContext';

const RequireAuth = ({ allowedRoles }) => {
  const { auth, user, loading } = useAuthContext(); // Assuming `user` contains role info
  const location = useLocation();

  if (loading) {
    return <ScreenLoader />;
  }

  // If the user is not authenticated, redirect to login
  if (!auth) {
    return (
      <Navigate
        to="/auth/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // If roles are specified and the user's role is not allowed, redirect to 403 error page
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return (
      <Navigate
        to="/error/403"
        state={{ from: location }}
        replace
      />
    );
  }

  // If authenticated and role is allowed, render the protected routes
  return <Outlet />;
};

export { RequireAuth };
