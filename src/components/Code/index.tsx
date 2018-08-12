import * as React from 'react';
import PortfolioItem from '../PortfolioItem';

const Code = () => (
  <div className="code">
    <PortfolioItem
      title="react-wikivoyage"
      link="https://github.com/warrenwhipple/react-wikivoyage"
      screenshot="react-wikivoyage.jpg"
      description="A React client view for Wikivoyage."
      timeframe="2018 April to 2018 July"
      extraLinks={[
        {
          text: 'GitHub Repo',
          url: 'https://github.com/warrenwhipple/react-wikivoyage'
        },
        {
          text: 'Live Demo',
          url: 'https://react-wikivoyage.netlify.com/'
        }
      ]}
      skills={[
        'JavaScript',
        'Node',
        'React',
        'Netlify',
        'WikiMedia API',
        'Flow',
        'Prettier',
        'React Router',
        'React Autosuggest'
      ]}
    />

    <PortfolioItem
      title="3D Pen"
      link="https://github.com/warrenwhipple/3dpen"
      screenshot="https://user-images.githubusercontent.com/12202734/44002420-0730af26-9e10-11e8-9bde-95e8bcc1409d.gif"
      description="An experiment in dead reckoning using iPhone accelerometer and gyroscope
      sensors."
      timeframe="2012"
      extraLinks={[
        {
          text: 'GitHub Repo',
          url: 'https://github.com/warrenwhipple/3dpen'
        },
        {
          text: 'Video Demo',
          url: 'https://youtu.be/gwJE_EKCMks'
        }
      ]}
      skills={['iOS', 'Objective C', 'Core Motion', 'GLKit']}
    />

    <PortfolioItem
      title="Polyform"
      link="https://github.com/warrenwhipple/polyform"
      screenshot="https://user-images.githubusercontent.com/12202734/44002592-28a7900e-9e13-11e8-91e6-f9b794657d91.gif"
      description="An experimental iOS 2D physics tetromino stacking game."
      timeframe="2013"
      extraLinks={[
        {
          text: 'GitHub Repo',
          url: 'https://github.com/warrenwhipple/polyform'
        },
        {
          text: 'Video Demo',
          url: 'https://youtu.be/Fyxa2XrMc1g'
        }
      ]}
      skills={['iOS', 'Objective C', 'GLKit', 'Box2D']}
    />
  </div>
);

export default Code;
