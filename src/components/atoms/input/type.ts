import { InputHTMLAttributes } from "react";
import { VariantProps } from 'tailwind-variants'
import { inputCls } from "./theme";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputCls>