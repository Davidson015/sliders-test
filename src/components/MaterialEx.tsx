import React from 'react';

import Slider from '@mui/material/Slider';

interface IMaterialExProps {
  scale: (newValue: number | number[]) => void;
  value: number;
}

export const MaterialEx = (props: IMaterialExProps): React.ReactElement => {
  
  return (
    <>
      <Slider
        value={props.value}
        aria-label="Default"
        max={10}
        step={0.1}
        valueLabelDisplay="off"
        onChange={(event, newValue) => props.scale(newValue)}
        track={false}
        sx={{
          height: '30px',
          width: '100%',
          borderRadius: '15px',
          '& .MuiSlider-rail': {
            backgroundColor: '#999'
          },
          '& .MuiSlider-thumb': {
            height: '30px',
            width: '30px',
            backgroundColor: '#FFFFFF',
            cursor: 'grab',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
              boxShadow: 'inherit !important',
            },
            '&:active': {
              cursor: 'grabbing',
            }
          }
        }}
      />
    </>
  )
};