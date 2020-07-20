import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Input, InputProps } from "./Input";
import { mount } from "enzyme";

describe("Input", () => {
  let defaultProps: InputProps = {};

  beforeEach(() => {
    defaultProps.onChange = jest.fn();
    defaultProps.value = "";
  });

  it("renders", () => {
    expect(render(<Input {...defaultProps} />)).toMatchSnapshot();
  });

  it("renders with a label", () => {
    expect(render(<Input {...defaultProps} label='Input' />)).toMatchSnapshot();
  });

  it("is disabled when disabled prop is true", () => {
    const wrapper = mount(<Input {...defaultProps} disabled={true} />);

    expect(wrapper.find("input").getDOMNode().hasAttribute("disabled")).toBe(true);
  });

  it("triggers onChange when not disabled", () => {
    const wrapper = mount(<Input {...defaultProps} />);
    const event = {
      preventDefault() {},
      target: { value: "the-value" },
    };

    wrapper.find("input").simulate("change", event);
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it("doesn't trigger onChange when disabled", () => {
    const wrapper = mount(<Input {...defaultProps} disabled={true} />);
    const event = {
      preventDefault() {},
      target: { value: "the-value" },
    };

    wrapper.find("input").simulate("keypress", event);
    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });
});
