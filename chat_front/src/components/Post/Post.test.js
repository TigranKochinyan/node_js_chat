import React from 'react';
import { shallow } from 'enzyme';
import Post from './Post';
describe('MyComponent', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Post post={{
      id: 1,
      desc: "Love For All, Hatred For None.",
      photo: "assets/post/1.jpeg",
      date: "5 mins ago",
      userId: 1,
      like: 32,
      comment: 9,
    }} />)
  })

  it('should render correctly in "debug" mode', () => {
    expect(component).toMatchSnapshot();
  });
  it('should render likes with props likes counts', () => {
    const prevSpanState = component.find('.post-wrapper_bottom-left_likes');
    expect(prevSpanState.text()).toEqual(`32 people like it`);
    expect(component).toMatchSnapshot();
  });
  it('should add/odd when click to icon', () => {
    const icon = component.find('.post-wrapper_bottom-left_icon-like');
    icon.simulate('click');
    const prevSpanState = component.find('.post-wrapper_bottom-left_likes');
    expect(prevSpanState.text()).toEqual(`33 people like it`);
    expect(component).toMatchSnapshot();
  });
});