import { configure, shallow, render, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
