import { configure } from 'enzyme'; // eslint-disable-line
import Adapter from 'enzyme-adapter-react-16'; // eslint-disable-line
import 'jest-enzyme'; // eslint-disable-line 

configure({ adapter: new Adapter() });
