import { useState } from "react";


const Color = () => {
    const [color, setColor] = useState('#FFFFFF');

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <>
          <div className="color-container">
          <div className="color-display" style={{backgroundColor: color}}>
          <p>Selected Color : {color}</p>

          </div>
         <div className="picker">
         <label className="label">Select a color : </label>
         <input type='color' value={color} onChange={handleColorChange} />
         </div>

          </div>    
        </>
    )
}

export default Color;