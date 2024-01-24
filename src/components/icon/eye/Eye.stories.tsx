import { Meta, StoryObj } from '@storybook/react'

import { Eye } from './Eye'

const meta = {
  argTypes: {
    outline: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
  component: Eye,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof Eye>

export default meta
type Story = StoryObj<typeof meta>

export const EyeIcon: Story = {}
