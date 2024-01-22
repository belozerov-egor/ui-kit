import { JSX, ReactNode, useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

import s from './DropDownMenu.module.scss'

type Props = {
  align?: 'center' | 'end' | 'start'
  isOpenAfterItemClick?: boolean
  items?: {
    component: JSX.Element
    id: number
  }[]
  onItemClick?: () => void
  side?: 'bottom' | 'left' | 'right' | 'top'
  trigger?: ReactNode
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
}
const motionItem = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export const DropDownMenu = (props: Props) => {
  const {
    align = 'start',
    isOpenAfterItemClick = true,
    items,
    onItemClick,
    side = 'top',
    trigger,
  } = props

  const [isOpen, setIsOpen] = useState(false)

  const itemsForRender = items?.map((item, index) => {
    return (
      <div key={index}>
        {index === items?.length - 1 ? (
          <motion.div variants={motionItem}>
            <DropdownMenu.Item className={s.dropdownMenuItem}>{item.component}</DropdownMenu.Item>
          </motion.div>
        ) : (
          <>
            <motion.div variants={motionItem}>
              <DropdownMenu.Item className={s.dropdownMenuItem}>{item.component}</DropdownMenu.Item>
              <DropdownMenu.Separator className={s.dropdownMenuSeparator} />
            </motion.div>
          </>
        )}
      </div>
    )
  })

  const onCloseAutoFocusHandler = () => {
    setIsOpen(false)
  }
  const onClickHandler = () => {
    setIsOpen(isOpenAfterItemClick)
    onItemClick?.()
  }
  const onOpenChangeHandler = (e: boolean) => {
    setIsOpen(e)
  }
  const onOpenHandler = () => {
    setIsOpen(true)
  }

  const finalIconButton = clsx(s.iconButton, {
    [s.activeTrigger]: isOpen,
  })

  return (
    <DropdownMenu.Root onOpenChange={onOpenChangeHandler} open={isOpen}>
      <DropdownMenu.Trigger asChild onClick={onOpenHandler}>
        <button aria-label={'Customise options'} className={finalIconButton}>
          {trigger}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          className={s.dropdownMenuContent}
          onClick={onClickHandler}
          onCloseAutoFocus={onCloseAutoFocusHandler}
          side={side}
          sideOffset={5}
        >
          <motion.div animate={'visible'} initial={'hidden'} variants={container}>
            {itemsForRender}
          </motion.div>
          <DropdownMenu.Arrow asChild className={s.arrowBox}>
            <div className={s.arrow} />
          </DropdownMenu.Arrow>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
