import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button, ButtonProps } from "./Button";

describe("Button", () => {
  let defaultProps: ButtonProps = {};

  beforeEach(() => {
    defaultProps.onClick = jest.fn();
  });

  it("renders", () => {
    expect(render(<Button>Button</Button>)).toMatchSnapshot();
  });

  it("doesn't trigger onClick when disabled", () => {
    defaultProps.disabled = true;

    const { getByText } = render(<Button {...defaultProps}>Button</Button>);
    fireEvent.click(getByText("Button"));
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });
});
