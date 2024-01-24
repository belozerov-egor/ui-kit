import { Meta, StoryObj } from '@storybook/react'

import { ArrowIosForward } from './ArrowIosForward'

const meta = {
  component: ArrowIosForward,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof ArrowIosForward>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowIosForwardIcon: Story = {}
