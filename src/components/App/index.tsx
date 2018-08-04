import * as React from 'react';

import PrimaryHeader from '../PrimaryHeader';

import Experience from '../Experience';
import Landing from '../Landing';

const App = () => (
  <div className="app">
    <PrimaryHeader />
    <div className="content">
      <Landing />
      <Experience />
    </div>
  </div>
);

export default App;
