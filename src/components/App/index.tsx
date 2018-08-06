import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PrimaryHeader from '../PrimaryHeader';

import Experience from '../Experience';
import Landing from '../Landing';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <PrimaryHeader />
      <div className="content">
        <Route exact path="/" component={Landing} />
        <Route path="/experience" component={Experience} />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
