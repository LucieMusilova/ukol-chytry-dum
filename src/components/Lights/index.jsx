import React from 'react';
import Light from '../Light';
import './style.css';

const Lights = ({lights}) => {
  return (
    <div className="lights">
      {
        lights.map(
          (light, index) => <Light key={index} name={light.name} state={light.state}/>
        )
      }
    </div>
  )
};

export default Lights;


 