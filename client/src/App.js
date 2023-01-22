import React, { useEffect, useState } from 'react';
import Router from './components/Routes';
import { UidContext } from './components/Hook/AppContext';
const App = () => {

  const [token, setToken] = useState("");

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    setToken(token);
  }
}, []);
  return (
    <UidContext.Provider value={token}>
    <div className="app">
      <div className="content">
        <Router />
      </div>
    </div>
    </UidContext.Provider>
  );
};

export default App;