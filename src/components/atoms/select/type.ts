import type { SelectHTMLAttributes } from 'react'

interface Option {
  key: string;
  value: string | number;
}

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[];
}