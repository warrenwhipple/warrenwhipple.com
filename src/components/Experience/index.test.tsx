import * as Enzyme from 'enzyme';
import * as React from 'react';
import Experience from './';

let wrapper: Enzyme.ShallowWrapper;
beforeEach(() => {
  wrapper = Enzyme.shallow(<Experience />);
});

it('renders a div', () => {
  expect(wrapper.find('div').length).toEqual(1);
});
