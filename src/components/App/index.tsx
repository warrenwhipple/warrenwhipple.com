import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SideNav from '../SideNav';
import TopNav from '../TopNav';

import Code from '../Code';
import Experience from '../Experience';
import Landing from '../Landing';
import Websites from '../Websites';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <div className="topNavWrapper">
        <TopNav />
      </div>
      <div className="sideNavWrapper">
        <SideNav />
      </div>
      <div className="contentWrapper">
        <div className="content">
          <Route exact path="/" component={Landing} />
          <Route path="/code" component={Code} />
          <Route path="/websites" component={Websites} />
          <Route path="/experience" component={Experience} />
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
