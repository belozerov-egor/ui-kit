import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  argTypes: {
    onClick: { action: 'button clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outline', 'link'],
    },
  },
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Buttons',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    disabled: false,
    variant: 'outline',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const Text: Story = {
  args: {
    children: 'Text Button',
    disabled: false,
    variant: 'text',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
