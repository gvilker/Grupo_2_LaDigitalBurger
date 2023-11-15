import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

const PrivateRoute = ({ component: Component, adminOnly, ...rest }) => {
  const { userData } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!userData || (adminOnly && userData.userType !== 2)) {
          
          return <Redirect to="/login" />;
        }
        
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
