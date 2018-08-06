import { shallow } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders wrappers', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.topNavWrapper').length).toEqual(1);
  expect(wrapper.find('.sideNavWrapper').length).toEqual(1);
  expect(wrapper.find('.contentWrapper').length).toEqual(1);
});
