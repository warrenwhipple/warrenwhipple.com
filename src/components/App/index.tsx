import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  withRouter
} from 'react-router-dom';

import SideNav from '../SideNav';
import TopNav from '../TopNav';

import Code from '../Code';
import Websites from '../Websites';

import './index.css';

interface Props extends RouteComponentProps<any> {}

const CodeRedirect = () => <Redirect to="/code" />;

class App extends React.Component<Props> {
  public componentDidUpdate(prevProps: Props) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  public render() {
    return (
      <div className="app">
        <div className="topNavWrapper">
          <TopNav />
        </div>
        <div className="sideNavWrapper">
          <SideNav />
        </div>
        <div className="contentWrapper">
          <div className="content">
            <Route exact path="/" render={CodeRedirect} />
            <Route path="/code" component={Code} />
            <Route path="/websites" component={Websites} />
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(App);
