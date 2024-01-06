import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from '.'

const meta = {
  argTypes: { onChangeCallback: { action: 'tabSwitcher changes' } },
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

const tabsName = [
  { disabled: false, name: 'Switcher', value: 'Button1' },
  { disabled: true, name: 'Switcher', value: 'Button2' },
  { disabled: true, name: 'Switcher', value: 'Button3' },
]

export default meta
type Story = StoryObj<typeof meta>

export const ShowTabSwitcher: Story = {
  args: {
    activeTab: 'Button2',
    options: tabsName,
  },
}
