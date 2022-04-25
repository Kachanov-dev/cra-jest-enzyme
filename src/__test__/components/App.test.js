import React from "react";
import { shallow } from "enzyme";
import { App } from "../../App";
import { AppLink } from "../../AppLink";

describe("App page", () => {
  it("render: learn react link", () => {
    const component = shallow(<App />);
    const buttons = component.find(AppLink);

    expect(buttons.length).toBe(1);
  });
});
