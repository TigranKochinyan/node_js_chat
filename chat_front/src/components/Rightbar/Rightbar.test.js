import React from 'react';
import { shallow } from 'enzyme';
import Rightbar from './Rightbar';
describe('Rightbar', () => {
  it('should render correctly in "debug" mode without profile', () => {
    const component = shallow(<Rightbar debug />);
    
    expect(component).toMatchSnapshot();
  });
  it('should render correctly in "debug" mode with profile', () => {
    const component = shallow(<Rightbar profile debug />);
    
    expect(component).toMatchSnapshot();
  });
});