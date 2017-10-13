import Picture from '../modules/SecondPage/components/Picture';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import React from 'react';

configure({ adapter: new Adapter() });

describe('SecondPage Components', () => {
  it('renders Picture correctly', () => {
    const picture = render(<Picture />);
    expect(picture.text()).toContain('Have fun coding!');
  });
});
