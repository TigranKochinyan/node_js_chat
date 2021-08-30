import React from 'react';
import { shallow } from 'enzyme';
import Post from './Post';
describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Post post={{
      id: 1,
      desc: "Love For All, Hatred For None.",
      photo: "assets/post/1.jpeg",
      date: "5 mins ago",
      userId: 1,
      like: 32,
      comment: 9,
    }} debug />);
    
    expect(component).toMatchSnapshot();
  });
});