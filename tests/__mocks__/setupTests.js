import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
import "@testing-library/jest-dom/extend-expect";

configure({
	adapter: new Adapter()
});
