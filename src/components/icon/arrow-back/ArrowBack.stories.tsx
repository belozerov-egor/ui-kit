import { Meta, StoryObj } from '@storybook/react'

import { ArrowBack } from './ArrowBack'

const meta = {
  component: ArrowBack,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof ArrowBack>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowBackIcon: Story = {}
