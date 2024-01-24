import { Meta, StoryObj } from '@storybook/react'

import { EyeOff } from './EyeOff'

const meta = {
  argTypes: {
    outline: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
  component: EyeOff,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof EyeOff>

export default meta
type Story = StoryObj<typeof meta>

export const EyeOffIcon: Story = {}
