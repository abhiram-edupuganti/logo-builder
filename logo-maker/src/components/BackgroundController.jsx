import React, { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import GradientColorPicker from 'react-best-gradient-color-picker';

const BackgroundController = () => {
  const [rounded, setRounded] = useState(0);
  const [padding, setPadding] = useState(0);
  const [color, setColor] = useState('#000');
  
  // Retrieve storage value only once during component mount
  useEffect(() => {
    const storageValue = JSON.parse(localStorage.getItem('value'));
    if (storageValue) {
      setRounded(storageValue.bgRounded || 0);
      setPadding(storageValue.bgPadding || 0);
      setColor(storageValue.bgColor || '#000');
    }
  }, []);

  // Update local storage whenever the state changes
  useEffect(() => {
    const updatedValue = {
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color
    };
    localStorage.setItem('value', JSON.stringify(updatedValue));
  }, [rounded, padding, color]);

  return (
    <div>
      <div className='py-2'>
        <label className='p-2 flex justify-between items-center'>Rounded <span>{rounded} px</span></label>
        <Slider defaultValue={[rounded]} max={512} step={1} onValueChange={(event) => setRounded(event[0])} />
      </div>

      <div className='py-2'>
        <label className='p-2 flex justify-between items-center'>Padding <span>{padding} px</span></label>
        <Slider defaultValue={[padding]} max={512} step={1} onValueChange={(event) => setPadding(event[0])} />
      </div>

      <div className='py-2'>
        <label className='p-2 flex justify-between items-center'>Color Picker</label>
        <GradientColorPicker
          value={color}
          onChange={(color) => setColor(color)}
        />
      </div>
    </div>
  );
}

export default BackgroundController;













// import React, { useState } from 'react'
// import { Slider } from "@/components/ui/slider"
// import ColorPicker from 'react-best-gradient-color-picker'

// const BackgroundController = () => {

//   const [rounded, setRounded] = useState(0)
//   const [padding, setPadding] = useState(0)
//   const [color,setColor] = useState('#000')
//   const storageValue=JSON.parse(localStorage.getItem('value'))

//   useEffect(()=>{

//     const updatedValue={
//       ...storageValue,
//       bgRounded:rounded,
//       bgPadding:padding,
//       bgColor:color
//     }

//     localStorage.setItem('value',JSON.stringify(updatedValue))

//   })

//   return (
//     <div>
//       <div className='py-2'>
//         <label className='p-2 flex justify-between items-center'>Rounded <span>{rounded} px</span></label>
//         <Slider defaultValue={[0]} max={512} step={1} onValueChange={(event) => setRounded(event[0])} />
//       </div>

//       <div className='py-2'>
//         <label className='p-2 flex justify-between items-center'>Padding <span>{padding} px</span></label>
//         <Slider defaultValue={[0]} max={512} step={1} onValueChange={(event) => setPadding(event[0])} />
//       </div>

//       <div className='py-2'>
//         <label className='p-2 flex justify-between items-center'>Color Picker</label>
//         <ColorPicker hideController={true} selectedColor={(color)=>setColor(color)}/>
//       </div>
//     </div>
//   )
// }

// export default BackgroundController