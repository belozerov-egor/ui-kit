import * as Tabs from '@radix-ui/react-tabs'

import s from './TabSwitcher.module.scss'

import { Typography } from '..'

type Props = {
  activeTab?: string
  className?: string
  disabled?: boolean
  onChangeCallback?: (value: string) => void
  options?: any[]
}
export const TabSwitcher = (props: Props) => {
  const { activeTab, className, onChangeCallback, options } = props

  return (
    <div key={activeTab}>
      <Tabs.Root className={s.tabsRoot} onValueChange={onChangeCallback}>
        <Tabs.List className={s.tabsList}>
          {options?.map((tab, index) => {
            return (
              <Tabs.Trigger
                className={`${s.tabsTrigger} ${className}`}
                data-state={tab.value === activeTab ? 'active' : 'unActive'}
                disabled={tab.disabled ?? false}
                key={index}
                value={tab.value}
              >
                <Typography variant={'h3'}>{tab.description ?? tab.value}</Typography>
              </Tabs.Trigger>
            )
          })}
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
