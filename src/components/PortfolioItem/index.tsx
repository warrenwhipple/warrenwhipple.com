import * as React from 'react';

export interface Props {
  itemName: string;
  link: string;
  screenShot?: string;
  description?: string;
}

const PortfolioItem = (props: Props) => (
  <div className="portfolioItem">
    <h2>
      <a href={props.link} target="_blank" rel="noopener">
        {props.itemName}
      </a>
    </h2>
    {props.screenShot && <img src={props.screenShot!} />}
    {props.description && (
      <div className="portfolioItemDescription">{props.description!}</div>
    )}
  </div>
);

export default PortfolioItem;
