import React from 'react';

const Icon = ({name}) => {
  return (
    <img className="icon" src={`/public/img/${name}.svg`}/>
  )
};

export default Icon;
