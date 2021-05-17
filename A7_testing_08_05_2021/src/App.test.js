import { render, screen } from '@testing-library/react';
import App from './App';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
 
  expect(wrapper.find('#head').text()).toBe("hello")
});
