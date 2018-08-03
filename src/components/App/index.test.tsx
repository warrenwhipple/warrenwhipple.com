import { shallow } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders 2 divs', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div').length).toEqual(2);
});
