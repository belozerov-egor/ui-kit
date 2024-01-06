import { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import s from './Table.module.scss'

import { Typography } from '..'

export type RootProps = ComponentProps<'table'>

export const Root: FC<RootProps> = ({ className, ...rest }) => {
  const classNames = {
    table: clsx(className, s.table),
  }

  return <table className={classNames.table} {...rest} />
}

export type HeadProps = ComponentProps<'thead'>

export const Head: FC<HeadProps> = props => {
  return <thead {...props} />
}

export type BodyProps = ComponentProps<'tbody'>

export const Body: FC<BodyProps> = props => {
  return <tbody {...props} />
}

export type RowProps = ComponentProps<'tr'>

export const Row: FC<RowProps> = ({ className, ...rest }) => {
  const classNames = {
    row: clsx(className, s.row),
  }

  return <tr className={classNames.row} {...rest} />
}

export type HeadCellProps = ComponentProps<'th'>

export const HeadCell: FC<HeadCellProps> = ({ className, ...rest }) => {
  const classNames = {
    headCell: clsx(className, s.th),
  }

  return <th className={classNames.headCell} {...rest} />
}

export type CellProps = ComponentProps<'td'>

export const Cell: FC<CellProps> = ({ className, ...rest }) => {
  const classNames = {
    cell: clsx(className, s.tableCell),
  }

  return <td className={classNames.cell} {...rest} />
}

export const Empty: FC<ComponentProps<'div'> & { mb?: string; mt?: string }> = ({
  className,
  mb,
  mt = '89px',
}) => {
  const classNames = {
    empty: clsx(className, s.empty),
  }

  return (
    <Typography className={classNames.empty} style={{ marginBottom: mb, marginTop: mt }}>
      Пока тут еще нет данных! :(
    </Typography>
  )
}

type TypeTestData = {
  cardsNumber: number
  createdBy: string
  id: number
  lastDate: string
  name: string
}

const testData: TypeTestData[] = [
  { cardsNumber: 4, createdBy: 'Ivan Ivanov', id: 1, lastDate: '24.07.2023', name: 'Pack Name' },
  { cardsNumber: 4, createdBy: 'Ivan Ivanov', id: 2, lastDate: '25.07.2023', name: 'Pack Name' },
  { cardsNumber: 4, createdBy: 'Ivan Ivanov', id: 3, lastDate: '26.07.2023', name: 'Pack Name' },
  { cardsNumber: 4, createdBy: 'Ivan Ivanov', id: 4, lastDate: '27.07.2023', name: 'Pack Name' },
  { cardsNumber: 4, createdBy: 'Ivan Ivanov', id: 5, lastDate: '28.07.2023', name: 'Pack Name' },
  { cardsNumber: 4, createdBy: 'Ivan Ivanov', id: 6, lastDate: '29.07.2023', name: 'Pack Name' },
  { cardsNumber: 4, createdBy: 'Ivan Ivanov', id: 7, lastDate: '30.07.2023', name: 'Pack Name' },
]

export const Table = () => {
  return (
    <Root>
      <Head>
        <Row>
          <HeadCell>Date of Payment</HeadCell>
          <HeadCell>End date of subscription</HeadCell>
          <HeadCell>Price</HeadCell>
          <HeadCell>Subscription Type</HeadCell>
          <HeadCell>Payment Type</HeadCell>
        </Row>
      </Head>
      <Body>
        {testData.map(el => {
          return (
            <Row key={el.id}>
              <Cell>{el.name}</Cell>
              <Cell>{el.cardsNumber}</Cell>
              <Cell>{el.lastDate}</Cell>
              <Cell>{el.createdBy}</Cell>
              <Cell></Cell>
            </Row>
          )
        })}
      </Body>
    </Root>
  )
}

export const TableElement = {
  Body,
  Cell,
  Empty,
  Head,
  HeadCell,
  Root,
  Row,
}
