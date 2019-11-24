import React from 'react';
import Content from "./components/Content";
import classNames from 'classnames';
import Navigation from "./components/Navigation";

const App = () => {
  const [screen, setScreen] = React.useState('welcome');
  const [status, setStatus] = React.useState('good');

  let navVisible;
  switch (screen) {
    case 'exerciseSelection':
    case 'ex-deadlift':
    case 'end':
    case 'history':
      navVisible = true;
      break;
    case 'welcome':
    case 'menu':
    default:
      navVisible = false;
  }

  const navHome = screen === 'end' ? 'welcome' : 'menu';
  let navPrev;
  switch (screen) {
    case 'exerciseSelection':
      navPrev = 'menu';
      break;
    case 'ex-deadlift':
      navPrev = 'exerciseSelection';
      break;
    case 'history':
      navPrev = 'menu';
      break;
  }

  return (
    <div className={classNames('screen', screen)}>
      {navVisible && <Navigation home={navHome} prev={navPrev} status={status} setScreen={setScreen}/>}
      <div className="screen-content">
        <Content screen={screen} setScreen={setScreen} status={status} setStatus={setStatus}/>
      </div>
    </div>
  )
};


export default App
