import React from 'react';
import Router from './components/Routes';
const App = () => {
  console.log(window.location.href)
  return (
    <div className="app">
      <div className="content">
        <Router />
      </div>
    </div>
  );
};

export default App;