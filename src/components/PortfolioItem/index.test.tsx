import * as Enzyme from 'enzyme';
import * as React from 'react';
import PortfolioItem from './';

let wrapper: Enzyme.ShallowWrapper;
beforeEach(() => {
  wrapper = Enzyme.shallow(
    <PortfolioItem itemName="Test Title" link="http://example.com" />
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

it('renders the title link', () => {
  expect(
    wrapper
      .find('h2')
      .first()
      .find('a')
      .first()
      .prop('href')
  ).toEqual('http://example.com');
});

it('optionally renders an image', () => {
  expect(wrapper.find('img').length).toEqual(0);
  wrapper.setProps({ screenShot: 'test.jpg' });
  expect(wrapper.find('img').length).toEqual(1);
});

it('optionally renders a description', () => {
  expect(wrapper.find('div.portfolioItemDescription').length).toEqual(0);
  wrapper.setProps({ description: 'Test.' });
  expect(wrapper.find('div.portfolioItemDescription').length).toEqual(1);
});
