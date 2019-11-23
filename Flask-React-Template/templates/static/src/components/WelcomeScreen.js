import React from 'react'

const WelcomeScreen = ({setScreen}) => {
  return (
    <React.Fragment>
      <div className="app-icon">
        <img src="/img/app_icon.svg"/>
      </div>
      <div className="panel">
        <div className="title">
          Welcome!
        </div>
        <div className="sub-title">
          Please enter your profile code
        </div>
      </div>
      <div className="code-input">
        <input type="text" placeholder="123456"/>
      </div>
      <div className="code-submit button" onClick={() => {
        setScreen('menu');
      }}>
        Sign in
      </div>
    </React.Fragment>
  )
};

export default WelcomeScreen;
