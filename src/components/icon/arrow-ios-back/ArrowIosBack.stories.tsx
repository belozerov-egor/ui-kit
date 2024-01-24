import { Meta, StoryObj } from '@storybook/react'

import { ArrowIosBack } from './ArrowIosBack'

const meta = {
  component: ArrowIosBack,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof ArrowIosBack>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowIosBackIcon: Story = {}
