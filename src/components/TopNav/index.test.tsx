import * as Enzyme from 'enzyme';
import * as React from 'react';
import TopNav from './';

let wrapper: Enzyme.ShallowWrapper;
beforeEach(() => {
  wrapper = Enzyme.shallow(<TopNav />);
});

it('renders a div', () => {
  expect(wrapper.find('div').length).toEqual(1);
});

it('renders h1', () => {
  expect(wrapper.find('h1').length).toEqual(1);
});

it('renders ul', () => {
  expect(wrapper.find('ul').length).toEqual(1);
});

it('renders li(s)', () => {
  expect(wrapper.find('li').length).toBeGreaterThanOrEqual(1);
});
