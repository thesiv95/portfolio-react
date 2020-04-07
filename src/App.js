import React from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import './index.css';
import './mediaqueries.css';

function App() {
  return (
        <div className="main-content">
          <Header fbUser={'thesiv95'} ghUser={'thesiv95'} />
          <div className="container">
            <Sidebar/>
            <Main/>
          </div>
        </div>
  );
}

export default App;
