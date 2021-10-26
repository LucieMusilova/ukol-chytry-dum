import React, { useState } from 'react';
import blindsOpened from './blinds-open.svg';
import blindsClosed from './blinds-closed.svg';
import './style.css';



const Blinds = ({state}) => {
  const [open, setOpen] = useState(state);

  return (
    
		<div className="blinds">
      <div className="blinds__icon">
        <img src={open === 'open' ? blindsOpened : blindsClosed}/>
      </div>
      <div className="blinds__name">
        Žaluzie
      </div>
      <div className="blinds__controls">
        <button className={open === 'open' ? 'button button--active' : 'button'} onClick={()=>setOpen('open')}>Otevřeno</button>
        <button className={open === 'closed' ? 'button button--active' : 'button'} onClick={()=>setOpen('closed')}>Zavřeno</button>
      </div>
    </div>
  )
};

export default Blinds;