import React from 'react'

import { Range } from 'react-range';

interface IReactRangeExProps {
  scale: (newValue: number | number[]) => void;
  value: number;
}

export const ReactRangeEx = (props: IReactRangeExProps): React.ReactElement => {
  const values = [props.value];

  return (
    <>
      <Range
        values={values}
        step={1}
        onChange={(newValue) => props.scale(newValue)}
        min={0}
        max={10}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '30px',
              width: '100%',
              borderRadius: '15px',
              backgroundColor: '#43464D'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '100%',
              width: '30px',
              borderRadius: '30px',
              backgroundColor: '#FFFFFF'
            }}
          />
        )}
      />
    </>
  )
}