import { ReactElement } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'

import s from './CheckBox.module.scss'

import { CheckIcon, Typography } from '..'

export type CheckBoxProps = {
  checked?: boolean
  disabled?: boolean
  label?: ReactElement | string
  onChange?: (checked: boolean) => void
}

export const CheckBox = (props: CheckBoxProps) => {
  const { checked, disabled = false, label, onChange, ...rest } = props

  return (
    <Typography
      as={'label'}
      className={s.label}
      color={disabled ? 'disabled' : 'primary'}
      variant={'regular14'}
    >
      <Checkbox.Root
        checked={!checked}
        className={`${s.checkboxRoot} ${checked ? s.active : s.unActive}`}
        disabled={!disabled}
        onCheckedChange={onChange}
        {...rest}
      >
        <Checkbox.Indicator className={s.checkboxIndicator}>
          <CheckIcon fill={disabled ? '#4c4c4c' : '#edf3fa'} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {label}
    </Typography>
  )
}
