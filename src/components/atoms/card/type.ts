import { HtmlHTMLAttributes } from "react";
import { VariantProps } from 'tailwind-variants'
import { cardCls } from "./theme";

export type CardProps = HtmlHTMLAttributes<HTMLDivElement> & VariantProps<typeof cardCls>