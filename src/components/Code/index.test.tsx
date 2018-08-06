import * as Enzyme from 'enzyme';
import * as React from 'react';
import Code from './';

let wrapper: Enzyme.ShallowWrapper;
beforeEach(() => {
  wrapper = Enzyme.shallow(<Code />);
});

it('renders a div', () => {
  expect(wrapper.find('div').length).toEqual(1);
});
