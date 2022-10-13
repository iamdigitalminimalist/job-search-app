import React, { useEffect, useState } from 'react';
import { Message } from '@job-search-app/api-interfaces';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from '@job-search-app/jobify/ui-shared';
import { PageNotFound, Register, Dashboard, Landing } from '../pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      {/*<div>*/}
      {/* <Landing />*/}
      {/*</div>*/}
      {/*<div>{m.message}</div>*/}
    </>
  );
};

export default App;
