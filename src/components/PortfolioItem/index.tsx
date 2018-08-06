import * as React from 'react';

export interface Props {
  itemName: string;
  itemLink: string;
}

const PortfolioItem = (props: Props) => (
  <div className="portfolioItem">
    <h2>
      <a href={props.itemLink} target="_blank" rel="noopener">
        {props.itemName}
      </a>
    </h2>
    <p>A description.</p>
  </div>
);

export default PortfolioItem;
