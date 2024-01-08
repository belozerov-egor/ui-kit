import type { Meta, StoryObj } from '@storybook/react'

import { SelectBox } from './Select'

const meta = {
  argTypes: { onValueChange: { action: 'select changes' } },
  component: SelectBox,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof SelectBox>

export default meta
type Story = StoryObj<typeof meta>

const people = [
  { id: '1', value: 'Durward Reynolds' },
  { id: '2', value: 'Kenton Towne' },
  { id: '3', value: 'Therese Wunsch' },
  { id: '4', value: 'Benedict Kessler' },
  { id: '5', value: 'Katelyn Rohan' },
]

export const SelectStory: Story = {
  args: {
    disabled: false,
    label: 'Select',
    options: people,
    placeholder: 'Select item',
    value: people[1].value,
  },
}

export const SelectStoryDisabled: Story = {
  args: {
    disabled: true,
    label: 'Select',
    options: people,
    placeholder: 'Select item',
    value: people[1].value,
  },
}
