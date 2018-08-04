import * as React from 'react';
import { Link } from 'react-router-dom';

const PrimaryHeader = () => (
  <div className="primaryHeader">
    <h1 className="siteTitle">
      <Link to="/">Warren Whipple</Link>
    </h1>
    <ul className="primaryNav">
      <li>
        <Link to="/experience">Experience</Link>
      </li>
      <li>
        <Link to="/code">Code</Link>
      </li>
      <li>
        <Link to="/websites">Websites</Link>
      </li>
    </ul>
  </div>
);

export default PrimaryHeader;
