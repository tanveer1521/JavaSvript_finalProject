import React from 'react';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import AuthenticationRoutes from '../../Authentication/routes';
import CarRoutes from '../../Cars/routes';

const Routes = () => {
  return (
    <>
      <PageRoutes />
      <UserRoutes />
      <AuthenticationRoutes />
      <CarRoutes />
    </>
  );
}

export default Routes;