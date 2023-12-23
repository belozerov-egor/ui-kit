import { ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

import * as SelectBox from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

import { ArrowIosDown } from '../icon'
import { Typography } from '../typography'

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

export const Select = (props: SelectBoxProps) => {
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

      <SelectBox.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onValueChange}
        required={required}
        value={value}
      >
        <SelectBox.Trigger
          aria-label={'select'}
          asChild
          className={`${disabled ? s.triggerDisabled : s.trigger} ${className}`}
          tabIndex={1}
        >
          <div>
            {value ? (
              <SelectBox.Value placeholder={placeholder}>
                {value.img && value.img}
                {value.description && <Typography>{value.description}</Typography>}
              </SelectBox.Value>
            ) : (
              <SelectBox.Value placeholder={placeholder} />
            )}
            <ArrowIosDown className={disabled ? s.iconDisabled : s.icon} />
          </div>
        </SelectBox.Trigger>
        <SelectBox.Portal>
          <SelectBox.Content
            className={clsx(s.content, { [s.height]: height })}
            position={'popper'}
            sideOffset={-1}
          >
            <SelectBox.Viewport>
              {options.map(el => (
                <SelectBox.Item
                  className={s.item}
                  key={el.value}
                  value={idValue ? el.id : el.value}
                >
                  {el?.img}
                  <SelectBox.ItemText>{el.description ?? el.value}</SelectBox.ItemText>
                </SelectBox.Item>
              ))}
            </SelectBox.Viewport>
          </SelectBox.Content>
        </SelectBox.Portal>
      </SelectBox.Root>
      <Typography color={'error'} variant={'regular16'}>
        {errorMessage?.message}
      </Typography>
    </Typography>
  )
}
