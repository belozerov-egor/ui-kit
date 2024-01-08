import { ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

import * as Select from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './SelectBox.module.scss'

import { ArrowIosDown, Typography } from '..'

export type SelectBoxProps = {
  className?: string
  defaultValue?: any
  disabled?: boolean
  errorMessage?: FieldError
  height?: boolean
  idValue?: boolean
  label?: string
  onValueChange?: (value: any) => void
  options: any[]
  placeholder?: ReactNode
  required?: boolean
  value?: any
}

export const SelectBox = (props: SelectBoxProps) => {
  const {
    className,
    defaultValue,
    disabled,
    errorMessage,
    height,
    idValue = false,
    label,
    onValueChange,
    options,
    placeholder,
    required,
    value,
  } = props

  return (
    <Typography as={'label'} color={'secondary'} variant={'regular14'}>
      {label}

      <Select.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onValueChange}
        required={required}
        value={value}
      >
        <Select.Trigger
          aria-label={'select'}
          asChild
          className={`${disabled ? s.triggerDisabled : s.trigger} ${className}`}
          tabIndex={1}
        >
          <div>
            {value ? (
              <Select.Value placeholder={placeholder}>
                {value.img && value.img}
                {value.description && <Typography>{value.description}</Typography>}
              </Select.Value>
            ) : (
              <Select.Value placeholder={placeholder} />
            )}
            <ArrowIosDown className={disabled ? s.iconDisabled : s.icon} />
          </div>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className={clsx(s.content, { [s.height]: height })}
            position={'popper'}
            sideOffset={-1}
          >
            <Select.Viewport>
              {options.map(el => (
                <Select.Item className={s.item} key={el.value} value={idValue ? el.id : el.value}>
                  {el?.img}
                  <Select.ItemText>{el.description ?? el.value}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      <Typography color={'error'} variant={'regular16'}>
        {errorMessage?.message}
      </Typography>
    </Typography>
  )
}
