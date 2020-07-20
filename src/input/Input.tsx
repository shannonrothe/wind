import React from "react";
import { BaseProps } from "..";

export type InputProps = {
  type?: "text" | "password" | "number";
} & BaseProps;

export const Input = ({ type = "text" }: InputProps) => {
  return (
    <div>
      <input className='appearance-none px-4 py-2 bg-white border rounded text-sm' type={type} />
    </div>
  );
};
