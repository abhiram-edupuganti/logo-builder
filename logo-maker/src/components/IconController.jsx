import { Smile } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Slider } from "@/components/ui/slider";
import GradientColorPicker from 'react-best-gradient-color-picker';

const IconController = () => {
  const [size, setSize] = useState(280);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState('#fff');

  useEffect(() => {
    const storageValue = JSON.parse(localStorage.getItem('value'));
    if (storageValue) {
      setSize(storageValue.iconSize || 280);
      setRotate(storageValue.iconRotate || 0);
      setColor(storageValue.iconColor || '#fff');
    }
  }, []);

  useEffect(() => {
    const updatedValue = {
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: 'Smile'
    };

    localStorage.setItem('value', JSON.stringify(updatedValue));
  }, [size, rotate, color]);

  return (
    <div>
      <label>Icon</label>
      <div 
        className='p-3 cursor-pointer bg-gray-200 my-2 rounded-md w-[50px] h-[50px] flex items-center justify-center' 
        style={{ transform: `rotate(${rotate}deg)`, fontSize: size }}
      >
        <Smile color={color} />
      </div>

      <div className='py-2'>
        <label className='p-2 flex justify-between items-center'>Size <span>{size} px</span></label>
        <Slider defaultValue={[size]} max={512} step={1} onValueChange={(event) => setSize(event[0])} />
      </div>

      <div className='py-2'>
        <label className='p-2 flex justify-between items-center'>Rotate <span>{rotate} °</span></label>
        <Slider defaultValue={[rotate]} max={360} step={1} onValueChange={(event) => setRotate(event[0])} />
      </div>

      <div className='py-2'>
        <label className='p-2 flex justify-between items-center'>Color Picker</label>
        <GradientColorPicker
          value={color}
          onChange={(color) => setColor(color)}
          hideControls={true}
          hideEyeDrop={true}
          hideAdvancedSliders={true}
          hideColorGuide={true}
          hideInputType={true}
        />
      </div>
    </div>
  );
}

export default IconController;




// import { Smile } from 'lucide-react'
// import React, { useEffect, useState } from 'react'
// import { Slider } from "@/components/ui/slider"
// import ColorPicker from 'react-best-gradient-color-picker'




// const IconController = () => {

//   const [size,setSize]=useState(280)
//   const [rotate,setRotate]=useState(0)
//   const [color,setColor]=useState('#fff')
//   const storageValue=JSON.parse(localStorage.getItem('value'))

//   useEffect(()=>{

//     const updatedValue={
//       ...storageValue,
//       iconSize:size,
//       iconRotate:rotate,
//       iconColor:color,
//       icon:'Smile'
//     }

//     localStorage.setItem('value',JSON.stringify(updatedValue))

//   },[size,rotate,color])
  

//   return (
//     <div>
//       <label>Icon</label>
//       <div className='p-3 cursor-pointer bg-gray-200 my-2 rounded-md w-[50px] h-[50px] flex items-center justify-center'>
//         <Smile />
//       </div>
//       <div className='py-2'>
//         <label className='p-2 flex justify-between items-center'>Size <span>{size} px</span></label>
//         <Slider defaultValue={[280]} max={512} step={1} onValueChange={(event)=>setSize(event[0])} />
//       </div>

//       <div className='py-2'>
//         <label className='p-2 flex justify-between items-center'>Rotate <span>{rotate} °</span></label>
//         <Slider defaultValue={[0]} max={360} step={1} onValueChange={(event)=>setRotate(event[0])} />
//       </div>

//       <div className='py-2'>
//         <label className='p-2 flex justify-between items-center'>Color Picker</label>
//         <ColorPicker hideController={true} selectedColor={(color)=>setColor(color)}/>
//       </div>

      
      

//     </div>
//   )
// }

// export default IconController