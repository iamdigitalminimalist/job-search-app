import React, { useEffect, useState } from 'react';
import { Message } from '@job-search-app/api-interfaces';
import {Landing} from "../pages/Landing/Landing";

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div>
       <Landing />
      </div>
      {/*<div>{m.message}</div>*/}
    </>
  );
};

export default App;
