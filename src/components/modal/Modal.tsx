import { ComponentProps } from 'react'

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

import s from './Modal.module.scss'

import { ArrowIosBack, Button, Close, Typography } from '..'

type Props = {
  buttonBlockClassName?: string
  callBack?: () => void
  className?: string
  contentBoxClassName?: string
  isOverlay?: boolean
  nextClick?: () => void
  nextContent?: boolean
  nextContentTitle?: string
  onClose?: () => void
  open?: boolean
  prevClick?: () => void
  prevContent?: boolean
  showCloseButton?: boolean
  showHeader?: boolean
  title?: string
  titleFirstButton?: string
  titleSecondButton?: string
} & ComponentProps<'div'>

const MODAL_ANIMATION = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
}

export const Modal = (props: Props) => {
  const {
    buttonBlockClassName,
    callBack,
    children,
    className,
    contentBoxClassName,
    isOverlay = true,
    nextClick,
    nextContent = false,
    nextContentTitle,
    onClose,
    open = false,
    prevClick,
    prevContent = false,
    showCloseButton = true,
    showHeader = true,
    title,
    titleFirstButton,
    titleSecondButton,
  } = props

  function handleModalClosed() {
    onClose?.()
  }

  const finalDialogContent = clsx(className, s.content)
  const finalContentBlock = clsx(contentBoxClassName, s.contentBlock)
  const finalButtonBlock = clsx(buttonBlockClassName, s.buttonBlock)

  return (
    <Dialog onOpenChange={handleModalClosed} open={open}>
      {open && (
        <DialogPortal>
          <motion.div animate={'visible'} initial={'hidden'} variants={MODAL_ANIMATION}>
            <DialogOverlay className={isOverlay ? s.overlay : s.noOverlay} />
            <DialogContent className={finalDialogContent}>
              {showHeader && (
                <header className={s.header}>
                  {prevContent && <ArrowIosBack className={s.prevContent} onClick={prevClick} />}
                  <DialogTitle asChild>
                    <Typography variant={'h1'}>{title}</Typography>
                  </DialogTitle>

                  <div>
                    {nextContentTitle && (
                      <Button disabled={!nextContent} onClick={nextClick} variant={'text'}>
                        {nextContentTitle}
                      </Button>
                    )}
                  </div>

                  {showCloseButton && <Close className={s.closeButton} onClick={onClose} />}
                </header>
              )}
              <div className={finalContentBlock}>{children}</div>
              <div className={finalButtonBlock}>
                {titleFirstButton && (
                  <Button onClick={callBack} variant={'outline'}>
                    <Typography className={s.firstButtonText} variant={'h3'}>
                      {titleFirstButton}
                    </Typography>
                  </Button>
                )}
                {titleSecondButton && (
                  <Button
                    onClick={titleFirstButton ? () => onClose?.() : callBack}
                    variant={'primary'}
                  >
                    {titleSecondButton}
                  </Button>
                )}
              </div>
            </DialogContent>
          </motion.div>
        </DialogPortal>
      )}
    </Dialog>
  )
}
