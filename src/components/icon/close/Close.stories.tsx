import { Meta, StoryObj } from '@storybook/react'

import { Close } from './Close'

const meta = {
  component: Close,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof Close>

export default meta
type Story = StoryObj<typeof meta>

export const CloseIcon: Story = {}
