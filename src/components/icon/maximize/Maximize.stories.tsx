import { Meta, StoryObj } from '@storybook/react'

import { Maximize } from './Maximize'

const meta = {
  argTypes: {
    outline: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
  component: Maximize,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof Maximize>

export default meta
type Story = StoryObj<typeof meta>

export const MaximizeIcon: Story = {}
