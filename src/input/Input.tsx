import React from "react";
import { BaseProps } from "..";

export type InputProps = {
  onChange?: (event: React.ChangeEvent) => void;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "number";
  value?: string;
} & BaseProps;

type InputClassList = (string | false | undefined)[];

export const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const { onChange, disabled, id, label, placeholder, type = "text", value } = props;
  const classes: InputClassList = [
    "appearance-none",
    "w-full",
    "px-4 py-2",
    disabled ? "bg-gray-200" : "bg-white",
    "border",
    disabled && "border-gray-300",
    "rounded",
    "text-sm",
    "focus:outline-none focus:shadow-outline focus:border-none",
    "text-gray-800",
  ];

  // Extracted to a variable so it can be reused between label and no label
  const InputElement = () => (
    <input
      ref={ref}
      id={id}
      disabled={disabled}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${classes.join(" ")}`}
      type={type}
    />
  );

  return (
    <div>
      {label && (
        <label htmlFor={id}>
          <span className='inline-block mb-1 font-semibold text-gray-600 uppercase text-xs'>{label}</span>
          <InputElement />
        </label>
      )}

      {!label && <InputElement />}
    </div>
  );
});
