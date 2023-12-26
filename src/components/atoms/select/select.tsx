import React, { forwardRef } from 'react'
import type { SelectProps } from './type';
import clsx from 'clsx';

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {options, className, ...selectProps} = props;
  return (
    <select ref={ref} className={clsx("form-select rounded-md", className)} {...selectProps}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.key}</option>
      ))}
    </select>
  )
})

Select.displayName = "Select";

export default Select