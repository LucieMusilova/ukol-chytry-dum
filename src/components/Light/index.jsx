import React, { useState } from 'react';
import imgOff from './light-off.svg';
import imgOn from './light-on.svg';
import './style.css';


const Light = ({name, state}) => {
  const [isOn, setIsOn] = useState(state);

  const handleClick = () => {
    if (isOn === 'on') {
      setIsOn('off');
    } else setIsOn('on');
  };


  return (
    <div>
      <div className="light" onClick={handleClick}>
					<div className="light__icon">
						<img src={isOn === 'on' ? imgOn : imgOff} />
					</div>
					<div className="light__name">
						{name}
					</div>
				</div>
    </div>
  )
};

export default Light;