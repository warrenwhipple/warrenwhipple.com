import * as React from 'react';

import PortfolioItem from '../PortfolioItem';

const Websites = () => (
  <div className="websites">
    <p>Websites I created and/or maintained.</p>

    <PortfolioItem itemName="Test Title" link="http://example.com" />

    <div className="portfolioSection">
      <h2>
        <a href="https://bioethics.unc.edu" target="_blank" rel="noopener">
          bioethics.unc.edu
        </a>
      </h2>
      <a href="https://bioethics.unc.edu" target="_blank" rel="noopener">
        <img src="/bioethics.unc.edu.jpg" />
      </a>
      <p>A WordPress website for the UNC Center for Bioethics.</p>
      <p>
        <i>2012 March - 2018 February</i>
      </p>
      <p>
        Migration of HTML to WP. Content management. CSS styling. WP
        customization. Custom types and templates for{' '}
        <a
          href="https://bioethics.unc.edu/regr/"
          target="_blank"
          rel="noopener"
        >
          events
        </a>{' '}
        and{' '}
        <a
          href="https://bioethics.unc.edu/publication-search/"
          target="_blank"
          rel="noopener"
        >
          publications
        </a>
        . Combined blog and publication{' '}
        <a
          href="https://bioethics.unc.edu/news/"
          target="_blank"
          rel="noopener"
        >
          masonry feed
        </a>
        .{' '}
        <a
          href="https://github.com/warrenwhipple/zotero2wordpress"
          target="_blank"
          rel="noopener"
        >
          Python script
        </a>{' '}
        for importing Zotero citations into WordPress.
      </p>
    </div>

    <div className="portfolioSection">
      <h2>
        <a href="https://cennc.org" target="_blank" rel="noopener">
          cennc.org
        </a>
      </h2>
      <a href="https://cennc.org" target="_blank" rel="noopener">
        <img src="/cennc.org.jpg" />
      </a>
      <p>
        A WordPress website for the Clinical Ethics Network of North Carolina.
      </p>
      <p>
        <i>2015 August - 2018 February</i>
      </p>
      <p>
        WP deployment to BlueHost (2015). Content management. CSS styling. WP
        customization. Migration from BlueHost to UNC WP server (2018).
      </p>
    </div>
  </div>
);

export default Websites;
