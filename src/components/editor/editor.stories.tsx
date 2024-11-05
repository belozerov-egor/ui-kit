import { Meta, StoryObj } from '@storybook/react'

import { Editor } from './Editor'

const meta: Meta<typeof Editor> = {
  component: Editor,
  title: 'Components/Editor',
}

export default meta

type Story = StoryObj<typeof Editor>

export const DefaultEditor: Story = {
  render: () => <Editor />,
}
