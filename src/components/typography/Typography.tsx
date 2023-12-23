import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './Typography.module.scss'

type Props<T extends ElementType = 'p'> = {
  as?: T
  className?: string
  color?: 'disabled' | 'error' | 'linkColor' | 'primary' | 'secondary'
  variant?:
    | 'bold14'
    | 'bold16'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link'
    | 'medium14'
    | 'regular14'
    | 'regular16'
    | 's_link'
    | 'sb_small'
    | 'small'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const { as: Component = 'p', className, color, variant = 'regular16', ...rest } = props

  return <Component className={`${s[variant]} ${className} ${s[color ?? '']}`} {...rest} />
}
