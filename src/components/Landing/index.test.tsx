import * as Enzyme from 'enzyme';
import * as React from 'react';
import Landing from './';

let wrapper: Enzyme.ShallowWrapper;
beforeEach(() => {
  wrapper = Enzyme.shallow(<Landing />);
});

it('renders a div', () => {
  expect(wrapper.find('div').length).toEqual(1);
});
