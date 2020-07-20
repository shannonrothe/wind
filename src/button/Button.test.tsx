import React, { MouseEvent } from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button, ButtonProps } from "./Button";
import { mount } from "enzyme";

const createMockClickHandler = () => jest.fn((event: MouseEvent<HTMLElement>) => event.persist());

describe("Button", () => {
  let defaultProps: ButtonProps = {};

  beforeEach(() => {
    defaultProps.onClick = createMockClickHandler();
  });

  it("renders", () => {
    expect(render(<Button>Button</Button>)).toMatchSnapshot();
  });

  it("doesn't trigger onClick when disabled", () => {
    defaultProps.disabled = true;

    const wrapper = mount(<Button {...defaultProps}>Button</Button>);
    wrapper.simulate("click");
    wrapper.update();
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });
});
