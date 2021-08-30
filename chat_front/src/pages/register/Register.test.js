import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';
describe('Register', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Register debug />);
    expect(component).toMatchSnapshot();
  });
  it('should render correctly title', () => {
    const component = shallow(<Register debug />);
    const title = component.find('h3.login-title');
    expect(title.text()).toEqual('Social App');
    
    expect(component).toMatchSnapshot();
  });
});