import React from 'react'
import classNames from 'classnames'

const Exercise = ({name, displayName, disabled, setScreen}) => {
  return (
    <div className={classNames('exercise', name, {disabled: disabled})} onClick={() => {
      if (!disabled) setScreen(`ex-${name}`);
    }}>
      <div>{displayName}</div>
      <img src={`/public/img/ex/${name}.png`}/>
    </div>
  )
};

export default Exercise;
