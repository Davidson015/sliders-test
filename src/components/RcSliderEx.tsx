import React from 'react'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

interface IRcSliderExProps {
  scale: (newValue: number | number[]) => void;
  value: number;
}

export const RcSliderEx = (props: IRcSliderExProps): React.ReactElement => {
  return (
    <>
      <Slider
        value={props.value}
        max={10}
        step={0.1}
        onChange={(newValue) => props.scale(newValue)}
        trackStyle={{
          backgroundColor: '#43464D',
          height: '30px',
          borderRadius: '15px'
        }}
        railStyle={{
          backgroundColor: '#43464D',
          height: '30px',
          borderRadius: '15px'
        }}
        handleStyle={{
          borderColor: '#FFFFFF',
          height: '30px',
          width: '30px',
          marginTop: 'auto',
        }}
      />
    </>
  )
}