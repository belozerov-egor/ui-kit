import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

const meta = {
  argTypes: {
    variant: {
      color: {
        options: ['primary', 'secondary', 'error'],
      },
      control: { type: 'radio' },
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'regular16',
        'bold16',
        'regular14',
        'medium14',
        'bold14',
        'small',
        'sb_small',
        'link',
        's_link',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'Some text',
    variant: 'large',
  },
}
export const H1: Story = {
  args: {
    children: 'Some text',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    children: 'Some text',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: 'Some text',
    variant: 'h3',
  },
}
export const Regular16: Story = {
  args: {
    children: 'Some text',
    variant: 'regular16',
  },
}
export const Bold16: Story = {
  args: {
    children: 'Some text',
    variant: 'bold16',
  },
}
export const Regular14: Story = {
  args: {
    children: 'Some text',
    variant: 'regular14',
  },
}
export const Medium14: Story = {
  args: {
    children: 'Some text',
    variant: 'medium14',
  },
}
export const Bold14: Story = {
  args: {
    children: 'Some text',
    variant: 'bold14',
  },
}
export const Small: Story = {
  args: {
    children: 'Some text',
    variant: 'small',
  },
}
export const SemiBoldSmall: Story = {
  args: {
    children: 'Some text',
    variant: 'sb_small',
  },
}
export const Link: Story = {
  args: {
    children: 'Some text',
    variant: 'link',
  },
}
export const SmallLink: Story = {
  args: {
    children: 'Some text',
    variant: 's_link',
  },
}
