import React, { useState } from 'react';
import GradientColorPicker from 'react-best-gradient-color-picker';

const MyColorPicker = ({ hideController = false, selectedColor }) => {
  const [color, setColor] = useState('rgba(255,255,255,1)');

  return (
    <div>
      <GradientColorPicker 
        value={color} 
        onChange={(e) => { setColor(e); selectedColor(e); }}
        hideControls={hideController}
        hideEyeDrop={true}
        hideAdvancedSliders={true}
        hideColorGuide={true}
        hideInputType={true}
      />
    </div>
  );
}

export default MyColorPicker;
