import {tv} from 'tailwind-variants'

export const cardCls = tv({
  base: "min-w-[100px] p-6 bg-white",
  variants: {
    color: {
      primary: "focus:bg-blue-500",
      danger: "focus:bg-red-500",
      warning: "focus:bg-yellow-500",
      success: "focus:bg-green-500",
    }
  }
})