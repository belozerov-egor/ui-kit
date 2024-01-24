import { Meta, StoryObj } from '@storybook/react'

import { CheckIcon } from './CheckIcon'

const meta = {
  component: CheckIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof CheckIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Check: Story = {}
