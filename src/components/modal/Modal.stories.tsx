import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Modal } from '.'
import { Button, Typography } from '..'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta

export const ModalDemo = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button onClick={handleOpen} variant={'primary'}>
        Open Modal
      </Button>
      <Modal
        onClose={handleClose}
        open={open}
        showCloseButton
        title={'Test Modal'}
        titleFirstButton={'Close'}
        titleSecondButton={'Send'}
      >
        <Typography variant={'regular16'}>Content Modal</Typography>
      </Modal>
    </>
  )
}
