import * as React from 'react';
import './index.css';

export interface Props {
  title: string;
  link: string;
  extraLinks?: Array<{ text: string; url: string }>;
  screenshot?: string;
  description?: string;
  timeframe?: string;
  skills?: string[];
}

const PortfolioItem = (props: Props) => (
  <div className="portfolio__item">
    <h2>
      <a href={props.link} target="_blank" rel="noopener">
        {props.title}
      </a>
    </h2>
    {props.description && (
      <div className="portfolio__description">{props.description!}</div>
    )}
    {props.screenshot && (
      <a href={props.link} target="_blank" rel="noopener">
        <img src={props.screenshot!} />
      </a>
    )}
    {props.timeframe && (
      <div className="portfolio__timeframe">{props.timeframe!}</div>
    )}
    {props.extraLinks && (
      <ul className="portfolio__extraLinks">
        {props.extraLinks.map(extraLink => (
          <li key={extraLink.text}>
            <a href={extraLink.url} target="_blank" rel="noopener">
              {extraLink.text}
            </a>
          </li>
        ))}
      </ul>
    )}
    {props.skills && (
      <ul className="portfolio__skills">
        {props.skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    )}
  </div>
);

export default PortfolioItem;
