import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './Button.module.scss'

type Props<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'outline' | 'primary' | 'secondary' | 'text'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
