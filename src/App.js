import React from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import './index.css';
import './mediaqueries.css';

function App() {
  return (
        <div className="main-content">
          <Header githubUser={'thesiv95'} />
          <div className="container">
            <Sidebar/>
            <Main/>
            <div>
                <a target="_blank" rel="noopener noreferrer" className="icon-link" href="https://icons8.com/icon/47745/website">Website icon by Icons8</a>
            </div>
          </div>
        </div>
  );
}

export default App;
