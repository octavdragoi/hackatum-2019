import React from 'react'

const Menu = ({setScreen}) => {
  return (
    <React.Fragment>
      <div className="app-icon">
        <img src="/img/app_icon.svg"/>
      </div>
      <div className="panel">
        <div className="title">
          Welcome, Martin!
        </div>
        <div className="sub-title">
          What would you like to do?
        </div>
      </div>
      <div className="divider"/>
      <div className="actions">
        <div className="button" onClick={() => {
          setScreen('exerciseSelection');
        }}>Start lifting!
        </div>
        <div className="button" onClick={() => {
          setScreen('history');
        }}>View my history
        </div>
        <div className="button" onClick={() => {
          setScreen('end');
        }}>Leave for the day
        </div>
      </div>
    </React.Fragment>
  )
};

export default Menu;
