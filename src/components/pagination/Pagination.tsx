import { clsx } from 'clsx'

import s from './Pagination.module.scss'

import { ArrowIosBack, ArrowIosForward } from '..'
import { Select } from '../select'
import { Typography } from '../typography'
import { usePagination } from './usePagination'

// type PaginationConditionals = {
//   perPage?: Nullable<number>
//   perPageOptions?: Nullable<any[]>
//   onPerPageChange?: Nullable<(itemPerPage: number) => void>
// }
// TODO вероятно этот тип можно зарефакторить используя Nullable как написано выше
type PaginationConditionals =
  | {
      onPerPageChange: (itemPerPage: number) => void
      perPage: number
      perPageOptions: any[]
    }
  | {
      onPerPageChange?: never
      perPage?: null
      perPageOptions?: never
    }

export type Props = {
  count: number
  onChange: (page: number) => void
  onPerPageChange?: (itemPerPage: number) => void
  page: number
  perPage?: number
  perPageOptions?: any[]
  siblings?: number
} & PaginationConditionals

const classNames = {
  container: s.container,
  dots: s.dots,
  icon: s.icon,
  item: s.item,
  onPage: s.onPage,
  pageButton(selected?: boolean) {
    return clsx(this.item, selected && s.selected)
  },
  root: s.root,
  select: s.select,
  selectBox: s.selectBox,
  show: s.show,
}

export const Pagination = (props: Props) => {
  const { count, onChange, onPerPageChange, page, perPage = null, perPageOptions, siblings } = props

  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange,
    page,
    siblings,
  })

  const showPerPageSelect = !!perPageOptions && !!onPerPageChange

  return (
    <div className={classNames.root}>
      <div className={classNames.container}>
        <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
      </div>

      {showPerPageSelect && (
        <PerPageSelect
          {...{
            onPerPageChange,
            perPage,
            perPageOptions,
          }}
        />
      )}
    </div>
  )
}

type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}

type PageButtonProps = NavigationButtonProps & {
  page: number
  selected: boolean
}

const Dots = () => {
  return <span className={classNames.dots}>&#8230;</span>
}
const PageButton = (props: PageButtonProps) => {
  const { disabled, onClick, page, selected } = props

  return (
    <button
      className={classNames.pageButton(selected)}
      disabled={selected || disabled}
      onClick={onClick}
    >
      {page}
    </button>
  )
}
const PrevButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button
      aria-label={'change-page-left'}
      className={classNames.item}
      disabled={disabled}
      onClick={onClick}
    >
      <ArrowIosBack className={classNames.icon} />
    </button>
  )
}

const NextButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button
      aria-label={'change-page-right'}
      className={classNames.item}
      disabled={disabled}
      onClick={onClick}
    >
      <ArrowIosForward className={classNames.icon} />
    </button>
  )
}

type MainPaginationButtonsProps = {
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: (number | string)[]
}

const MainPaginationButtons = (props: MainPaginationButtonsProps) => {
  const { currentPage, onClick, paginationRange } = props

  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return <PageButton key={index} onClick={onClick(page)} page={page} selected={isSelected} />
      })}
    </>
  )
}

export type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: number) => void
  perPageOptions: any[]
}

export const PerPageSelect = ({ onPerPageChange, perPageOptions }: PerPageSelectProps) => {
  return (
    <div className={classNames.selectBox}>
      <Typography className={classNames.show} variant={'regular14'}>
        Show
      </Typography>
      <Select
        className={classNames.select}
        defaultValue={perPageOptions[0].value}
        onValueChange={onPerPageChange}
        options={perPageOptions}
      />
      <Typography className={classNames.onPage} variant={'regular14'}>
        on page
      </Typography>
    </div>
  )
}
