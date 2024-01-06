import { ChangeEvent, ComponentPropsWithoutRef, KeyboardEvent, forwardRef, useState } from 'react'

import s from './TextField.module.scss'

import { Close, Eye, EyeOff, Search } from '..'
import { Typography } from '../typography'

export type TextFieldProps = {
  className?: string
  disableValue?: boolean
  errorMessage?: string
  label?: string
  onChangeText?: (value: string) => void
  onEnter?: () => void
  onSearchClear?: () => void
  placeholder?: string
  requiredField?: boolean
  type: 'default' | 'password' | 'searchType'
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    className,
    disableValue = false,
    errorMessage,
    label,
    onChangeText,
    onEnter,
    onSearchClear,
    placeholder = 'Some text',
    requiredField = false,
    type = 'default',
    value,
    ...restProps
  } = props
  const [showPassword, setShowPassword] = useState(false)

  const finalType = getType(type, showPassword)

  const inputStyle = (type: 'default' | 'password' | 'searchType') => {
    if (type === 'searchType') {
      return { paddingLeft: '2.56rem', paddingRight: '35px' }
    } else if (type === 'password') {
      return { paddingRight: '35px' }
    } else {
      return {}
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeText?.(e.currentTarget.value)
  }

  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onEnter && e.key === 'Enter' && onEnter()
  }
  const onSearchClearHandler = () => {
    if (onSearchClear) {
      onSearchClear()
    }
  }

  return (
    <div className={className}>
      <Typography
        as={'label'}
        color={disableValue ? 'disabled' : 'secondary'}
        variant={'regular14'}
      >
        {label}
        {requiredField && (
          <Typography as={'span'} color={'error'}>
            *
          </Typography>
        )}
        <div className={`${s.fieldContainer}`}>
          {type === 'searchType' && (
            <Search className={disableValue ? s.searchDisabled : s.search}></Search>
          )}
          <input
            className={`${s.field} ${errorMessage ? s.error : ''}`}
            disabled={disableValue}
            onChange={onChangeHandler}
            onKeyDown={onKeyPressCallback}
            placeholder={placeholder}
            ref={ref}
            style={inputStyle(type)}
            type={finalType}
            value={value}
            {...restProps}
          />
          {type === 'password' && (
            <button
              className={s.buttonAction}
              disabled={disableValue}
              onClick={() => setShowPassword(prev => !prev)}
              type={'button'}
            >
              {showPassword ? (
                <Eye fill={disableValue ? '#4c4c4c' : '#fff'} />
              ) : (
                <EyeOff fill={disableValue ? '#4c4c4c' : '#fff'} />
              )}
            </button>
          )}
          {type === 'searchType' && !!value && (
            <button
              className={s.buttonAction}
              disabled={disableValue}
              onClick={onSearchClearHandler}
              type={'button'}
            >
              <Close fill={disableValue ? '#4c4c4c' : '#808080'} />
            </button>
          )}
        </div>
        <Typography color={'error'} variant={'regular16'}>
          {errorMessage}
        </Typography>
      </Typography>
    </div>
  )
})

function getType(type: string, showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
