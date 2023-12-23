import * as Slider from '@radix-ui/react-slider'

import s from './Slider.module.scss'

import { Typography } from '../typography'

type Props = {
  maxValue?: number
  minValue?: number
  setValue: (value: number[]) => void
  showValue?: boolean
  step?: number
  value: number[]
}

export const SuperSlider = (props: Props) => {
  const { maxValue = 10, minValue, setValue, showValue, step = 1, value } = props

  return (
    <div className={s.sliderBlock}>
      {showValue && (
        <div className={s.countBlock}>
          <Typography variant={'regular14'}>{value[0]}</Typography>
        </div>
      )}
      <Slider.Root
        className={s.sliderRoot}
        max={maxValue}
        min={minValue}
        onValueChange={setValue}
        step={step}
        value={value}
      >
        <Slider.Track className={s.sliderTrack}>
          <Slider.Range className={s.sliderRange} />
        </Slider.Track>
        <Slider.Thumb aria-label={'Volume'} className={s.sliderThumb} />
      </Slider.Root>
      {showValue && (
        <div className={s.countBlock}>
          <Typography variant={'regular14'}>{maxValue}</Typography>
        </div>
      )}
    </div>
  )
}
