import * as React from 'react';

interface Props {
  siteTitle?: string;
}

const PrimaryNav = (props: Props) => (
  <div className="primaryNav">
    <h1>{props.siteTitle}</h1>
  </div>
);

export default PrimaryNav;
