import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Layout } from '@job-search-app/jobify/ui-shared';
import { PageNotFound, Register, Landing, ProtectedRoute } from '../pages';
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from '../pages/dashboard';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
          errorElement={<PageNotFound />}
        >
          <Route path="stats" element={<Stats />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
