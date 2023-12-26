import React, { forwardRef } from 'react'
import { inputCls } from "./theme"
import type { InputProps } from './type'
import clsx from 'clsx';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { color, className, ...inputProps } = props;
  return <input ref={ref} className={clsx(inputCls({ color }), className)} {...inputProps} />
})
Input.displayName = "Input";
export default Input
