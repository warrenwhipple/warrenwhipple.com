import * as Enzyme from 'enzyme';
import * as React from 'react';
import PrimaryNav from './';

let wrapper: Enzyme.ShallowWrapper;
beforeEach(() => {
  wrapper = Enzyme.shallow(<PrimaryNav />);
});

it('renders a div', () => {
  expect(wrapper.find('div').length).toEqual(1);
});

it('renders siteTile as h1', () => {
  wrapper.setProps({ siteTitle: 'Test Title' });
  expect(wrapper.find('h1').length).toEqual(1);
  expect(
    wrapper
      .find('h1')
      .first()
      .text()
  ).toEqual('Test Title');
});
