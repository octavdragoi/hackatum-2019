import React from 'react';
import Content from "./components/Content";
import classNames from 'classnames';

const App = () => {
  const [screen, setScreen] = React.useState('welcome');

  return (
    <div className={classNames('screen', screen)}>
      <div className="screen-content">
        <Content screen={screen} setScreen={setScreen}/>
      </div>
    </div>
  )
};

export default App
