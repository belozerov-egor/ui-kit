import { Meta, StoryObj } from '@storybook/react'

import { ArrowIosUp } from './ArrowIosUp'

const meta = {
  component: ArrowIosUp,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof ArrowIosUp>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowIosUpIcon: Story = {}
