import * as React from 'react';

import PortfolioItem from '../PortfolioItem';

const Websites = () => (
  <div className="websites">
    <p>Websites I created and/or maintained.</p>

    <PortfolioItem
      title="bioethics.unc.edu"
      link="https://bioethics.unc.edu"
      extraLinks={[
        { text: 'Google', url: 'https://google.com' },
        { text: 'Bing', url: 'https://bing.com' }
      ]}
      screenshot="bioethics.unc.edu.jpg"
      description="The UNC Center for Bioethics website."
      timeframe="2012 March - 2018 February"
      skills={[
        'Migration of HTML to WP',
        'Content management',
        'CSS styling',
        'WP Toolset custom types and templates',
        'Embedded JavaScript'
      ]}
    />

    <PortfolioItem
      title="cennc.org"
      link="https://cennc.org"
      extraLinks={[
        { text: 'Google', url: 'https://google.com' },
        { text: 'Bing', url: 'https://bing.com' }
      ]}
      screenshot="cennc.org.jpg"
      description="The Clinical Ethics Network of North Carolina website."
      timeframe="2015 August - 2018 February"
      skills={[
        'Initial WP deployment to BlueHost',
        'Content management',
        'CSS styling',
        'WP customization',
        'Migration from BlueHost to UNC WP server'
      ]}
    />
  </div>
);

export default Websites;
