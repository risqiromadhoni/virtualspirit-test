import {tv} from 'tailwind-variants'

export const inputCls = tv({
  base: "rounded-md",
  variants: {
    color: {
      primary: "focus:bg-blue-100",
      danger: "focus:bg-red-500",
      warning: "focus:bg-yellow-500",
      success: "focus:bg-green-500",
    }
  },
  defaultVariants: {
    color: "primary"
  }
})