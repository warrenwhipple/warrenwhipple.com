import * as Enzyme from 'enzyme';
import * as React from 'react';
import PortfolioItem from './';

let wrapper: Enzyme.ShallowWrapper;
beforeEach(() => {
  wrapper = Enzyme.shallow(
    <PortfolioItem itemName="Test Title" itemLink="http://example.com" />
  );
});

it('renders a div', () => {
  expect(wrapper.find('div').length).toEqual(1);
});

it('renders the title', () => {
  expect(
    wrapper
      .find('h2')
      .first()
      .text()
  ).toEqual('Test Title');
});

it('links from the title', () => {
  expect(
    wrapper
      .find('h2')
      .first()
      .find('a')
      .first()
      .prop('href')
  ).toEqual('http://example.com');
});
