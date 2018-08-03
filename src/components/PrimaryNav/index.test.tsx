import { shallow } from 'enzyme';
import * as React from 'react';
import PrimaryNav from './';

it('renders a div', () => {
  const wrapper = shallow(<PrimaryNav />);
  expect(wrapper.find('div').length).toEqual(1);
});
