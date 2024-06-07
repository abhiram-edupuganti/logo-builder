import React from 'react'
import ColorPicker from 'react-best-gradient-color-picker'

const ColorPicker = ({ hideController = false , selectedColor}) => {

    const [color, setColor] = useState('rgba(255,255,255,1)');

    return (
        <div>
            <ColorPicker value={color} onChange={(e)=>{setColor(e); selectedColor(e)}}
                hideControls={hideController}
                hideEyeDrop={true}
                hideAdvancedSliders={true}
                hideColorGuide={true}
                hideInputType={true}
            />
        </div>
    )
}

export default ColorPicker