import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { cardCls } from "./theme"
import type { CardProps } from './type'

const Input = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { color, className, ...cardProps } = props;
  return <div ref={ref} className={clsx(cardCls({ color }), className)} {...cardProps} />
})
Input.displayName = "Card";
export default Input