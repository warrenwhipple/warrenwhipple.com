import * as React from 'react';

import PortfolioItem from '../PortfolioItem';

const Websites = () => (
  <div className="websites">
    <PortfolioItem
      title="bioethics.unc.edu"
      link="https://bioethics.unc.edu"
      screenshot="bioethics.unc.edu.jpg"
      description="UNC Center for Bioethics website."
      timeframe="2012 March to 2018 February"
      skills={[
        'Static HTML',
        'Migration to WordPress',
        'CSS',
        'WP Toolset custom types and templates',
        'Embedded JavaScript',
        'Content management'
      ]}
    />
    <PortfolioItem
      title="med.unc.edu/socialmed"
      link="https://www.med.unc.edu/socialmed/"
      screenshot="socialmedicine.jpg"
      description="UNC Department of Social Medicine Website."
      timeframe="2008 January to 2018 February"
      skills={[
        'Static HTML',
        'Migration to Plone',
        'Migration to WordPress',
        'CSS',
        'Content management'
      ]}
    />
    <PortfolioItem
      title="cennc.org"
      link="https://cennc.org"
      screenshot="cennc.org.jpg"
      description="Clinical Ethics Network of North Carolina website."
      timeframe="2015 August to 2018 February"
      skills={['Bluehost deployment', 'WordPress', 'CSS', 'PHP custom plugins']}
    />
  </div>
);

export default Websites;
