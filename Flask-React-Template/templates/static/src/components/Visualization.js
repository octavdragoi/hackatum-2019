import React from 'react'
import posed from 'react-pose';

const Visualization = (value) => {

  const Box = posed.div();

  return <div style={{width: 100*value, background: 'black'}} />;
};

export default Visualization
