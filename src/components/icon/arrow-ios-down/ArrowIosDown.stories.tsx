import { Meta, StoryObj } from '@storybook/react'

import { ArrowIosDown } from './ArrowIosDown'

const meta = {
  component: ArrowIosDown,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof ArrowIosDown>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowIosDownIcon: Story = {}
