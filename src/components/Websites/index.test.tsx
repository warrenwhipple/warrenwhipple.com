import * as Enzyme from 'enzyme';
import * as React from 'react';
import Websites from './';

let wrapper: Enzyme.ShallowWrapper;
beforeEach(() => {
  wrapper = Enzyme.shallow(<Websites />);
});

it('renders a wrapper div', () => {
  expect(wrapper.find('div.websites').length).toEqual(1);
});
