import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './TextAreaField.module.scss'

import { Typography } from '../typography'

export type TextAreaProps = {
  className?: string
  disabled?: boolean
  errorMessage?: string
  fullWidth?: boolean
  label?: string
  placeholder?: string
} & ComponentPropsWithoutRef<'textarea'>

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { className, disabled, errorMessage, fullWidth, label, placeholder, ...rest } = props

  const classNames = {
    label: clsx(s.label, disabled && s.disabled),
    textArea: clsx(s.textarea, errorMessage && s.error, fullWidth && s.fullWidth),
    textAreaContainer: clsx(className, s.container),
  }

  return (
    <div className={classNames.textAreaContainer}>
      <Typography className={classNames.label} color={'secondary'} variant={'regular14'}>
        {label}
      </Typography>
      <textarea
        className={classNames.textArea}
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
        ref={ref}
      />
      <Typography className={s.errorMessage} color={'error'} variant={'regular14'}>
        {errorMessage}
      </Typography>
    </div>
  )
})
