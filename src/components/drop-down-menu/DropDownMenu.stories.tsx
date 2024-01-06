import { useState } from 'react'

import { Meta } from '@storybook/react'

import { DropDownMenu } from '.'
import { Maximize, SuperSlider } from '..'

const meta = {
  component: DropDownMenu,
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta

export const DropdownMenuFirstVariant = () => {
  const [value, setValue] = useState([0])

  const dropDownMenu = [
    {
      component: (
        <div style={{ width: '124px' }}>
          <SuperSlider setValue={setValue} value={value} />
        </div>
      ),
      id: 1,
    },
  ]

  return <DropDownMenu items={dropDownMenu} trigger={<Maximize />} />
}
