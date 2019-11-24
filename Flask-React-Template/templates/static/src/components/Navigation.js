import React from 'react';
import Icon from "./Icon";
import classNames from 'classnames';

const Navigation = ({prev, home, next, setScreen, status}) => {
  return (
    <div className={classNames('navigation', status)}>
      {prev ? <div className="prev" onClick={() => {
        setScreen(prev);
      }}><Icon name="prev"/></div> : <div/>}
      {home ? <div className="home" onClick={() => {
        setScreen(home);
      }}><Icon name="home"/></div> : <div/>}
      {next ? <div className="next" onClick={() => {
        setScreen(next);
      }}><Icon name="next"/></div> : <div/>}
    </div>
  )
};

export default Navigation;
