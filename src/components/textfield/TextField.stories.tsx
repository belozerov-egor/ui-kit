import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './TextField'

const meta = {
  argTypes: { onChange: { action: 'text changes' } },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const TextFieldDefault: Story = {
  args: {
    disableValue: false,
    label: 'Default',
    placeholder: 'Default',
    type: 'default',
    value: '',
  },
}
export const TextFieldDefaultError: Story = {
  args: {
    disableValue: false,
    errorMessage: 'Error!',
    placeholder: 'Default',
    type: 'default',
    value: '',
  },
}
export const TextFieldPassword: Story = {
  args: {
    disableValue: false,
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
    value: 'Password',
  },
}
export const TextFieldPasswordError: Story = {
  args: {
    disableValue: false,
    errorMessage: 'Error!',
    placeholder: 'Password',
    type: 'password',
    value: 'Some Error',
  },
}
export const TextFieldSearch: Story = {
  args: {
    disableValue: false,
    label: 'Search',
    placeholder: 'Search',
    type: 'searchType',
    value: '',
  },
}
export const TextFieldSearchError: Story = {
  args: {
    disableValue: false,
    errorMessage: 'Error!',
    placeholder: 'Search',
    type: 'searchType',
    value: '',
  },
}
