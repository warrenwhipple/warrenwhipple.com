import * as React from 'react';

interface Props {
  siteTitle?: string;
}

const PrimaryHeader = (props: Props) => (
  <div className="primaryHeader">
    <h1 className="siteTitle">{props.siteTitle}</h1>
  </div>
);

export default PrimaryHeader;
