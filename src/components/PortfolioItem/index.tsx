import * as React from 'react';

export interface Props {
  title: string;
  link: string;
  extraLinks?: Array<{ text: string; url: string }>;
  screenshot?: string;
  description?: string;
  timeframe?: string;
  skills?: string;
}

const PortfolioItem = (props: Props) => (
  <div className="portfolioItem">
    <h2>
      <a href={props.link} target="_blank" rel="noopener">
        {props.title}
      </a>
    </h2>
    {props.description && (
      <div className="portfolioDescription">{props.description!}</div>
    )}
    {props.screenshot && (
      <a href={props.link} target="_blank" rel="noopener">
        <img src={props.screenshot!} />
      </a>
    )}
    {props.timeframe && (
      <div className="portfolioTimeframe">{props.timeframe!}</div>
    )}
    {props.extraLinks && (
      <ul className="portfolioExtraLinks">
        {props.extraLinks.map(extraLink => (
          <li key={extraLink.text}>
            <a href={extraLink.url} target="_blank" rel="noopener">
              {extraLink.text}
            </a>
          </li>
        ))}
      </ul>
    )}
    {props.skills && <div className="portfolioSkills">{props.skills!}</div>}
  </div>
);

export default PortfolioItem;
