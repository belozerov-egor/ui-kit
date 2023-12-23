import type { Meta, StoryObj } from '@storybook/react'

import { FC, useState } from 'react'

import { SuperSlider } from './Slider'

const meta = {
  component: SuperSlider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof SuperSlider>

export default meta
type Story = StoryObj<typeof meta>

export const ShowSingleSlider: FC = () => {
  const [slideValue, setSlideValue] = useState([0])

  return <SuperSlider maxValue={10} setValue={setSlideValue} showValue value={slideValue} />
}
export const SingleSlider: Story = {
  args: {
    maxValue: 10,
    setValue: () => {},
    showValue: false,
    value: [0],
  },
}
