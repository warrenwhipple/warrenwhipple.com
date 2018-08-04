import * as React from 'react';
import Landing from '../Landing';
import PrimaryHeader from '../PrimaryHeader';

const App = () => (
  <div className="app">
    <PrimaryHeader />
    <div className="content">
      <Landing />
    </div>
  </div>
);

export default App;
