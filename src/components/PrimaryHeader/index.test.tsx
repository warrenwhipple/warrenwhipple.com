import * as Enzyme from 'enzyme';
import * as React from 'react';
import PrimaryHeader from './';

let wrapper: Enzyme.ShallowWrapper;
beforeEach(() => {
  wrapper = Enzyme.shallow(<PrimaryHeader />);
});

it('renders a div', () => {
  expect(wrapper.find('div').length).toEqual(1);
});

it('renders h1 siteTile', () => {
  expect(wrapper.find('h1').length).toEqual(1);
});

it('renders ul primaryNav', () => {
  expect(wrapper.find('ul').length).toEqual(1);
});

it('renders 3 primaryNav items', () => {
  expect(wrapper.find('li').length).toEqual(3);
});
