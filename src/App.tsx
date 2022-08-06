import React, { useState } from 'react';

import { MaterialEx } from './components/MaterialEx';
import { RcSliderEx } from './components/RcSliderEx';
import { ReactRangeEx } from './components/ReactRangeEx';
import { Grid, Text, Box, Image, List } from '@kibalabs/ui-react';

import logo from './logo.png';
import './App.css';

function App() {
  const img = document.getElementById('img') as HTMLImageElement;

  const [value, setValue] = useState(1);

  const scale = (newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
      newValue === 10 ? img.style.transform = `scale(1${newValue}%)` : img.style.transform = `scale(10${newValue}%)`;
    }
    
  }
  
  return (
    <div className="App">
      {/* <Grid shouldAddGutters={true}>
        <Grid.Item>
          <Box variant='card'>
            <Text variant='paragraph'>With Material UI Library.</Text>
            <MaterialEx scale={scale} value={value} logo={logo} />
          </Box>
        </Grid.Item>
        
        <Grid.Item>
          <Box variant='card'>
            <Text variant='paragraph'>With Rc-Slider Library.</Text>
            <RcSliderEx scale={scale} value={value} logo={logo} />
          </Box>
        </Grid.Item>
        
        <Grid.Item>
          <Box variant='card'>
            <Text variant='paragraph'>With React-Range Library.</Text>
            <ReactRangeEx scale={scale} value={value} logo={logo} />
          </Box>
        </Grid.Item>
      </Grid> */}

      {/* <Image id='img' className='image' variant='circular' source={logo} alternativeText='Profile Image' />
      <List>
        <List.Item itemKey={"mui"}>
          <Text variant='paragraph'>With Material UI Library.</Text>
          <MaterialEx scale={scale} value={value} />
        </List.Item>
        <List.Item itemKey={"rc-slider"}>
          <Text variant='paragraph'>With Rc-Slider Library.</Text>
          <RcSliderEx scale={scale} value={value} />
        </List.Item>
        <List.Item itemKey={"react-range"}>
          <ReactRangeEx scale={scale} value={value} />
          <Text variant='paragraph'>With React-Range Library.</Text>
        </List.Item>
      </List> */}
      
      <img id='img' className='image' src={logo} alt="Unable to load" />
      <MaterialEx scale={scale} value={value} />
      <RcSliderEx scale={scale} value={value} />
      <br /><br />
      <ReactRangeEx scale={scale} value={value} />
    </div>
  );
}

export default App;
