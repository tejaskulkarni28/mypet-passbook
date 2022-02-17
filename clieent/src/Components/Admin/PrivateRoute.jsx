
import { Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const PrivateRoute = ({ children }) => {
  let location = useLocation();

  const[isAuthenticated] = useState(Boolean(true))

  if(isAuthenticated){
      return <Navigate to="/admin/page" state={{from:location}}/>
  }

  if (!isAuthenticated) {
       return <Navigate to="/admin" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;