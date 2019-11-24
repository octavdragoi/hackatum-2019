import React from 'react'
import WelcomeScreen from "./WelcomeScreen";
import Menu from "./Menu";
import ExerciseSelection from "./ExerciseSelection";
import Deadlift from "./Deadlift";
import End from "./End";
import History from "./History";

const Content = ({screen, setScreen, status}) => {
  switch (screen) {
    case 'menu':
      return <Menu setScreen={setScreen}/>;
    case 'exerciseSelection':
      return <ExerciseSelection setScreen={setScreen}/>;
    case 'ex-deadlift':
      return <Deadlift status={status} count={0} setScreen={setScreen}/>;
    case 'end':
      return <End/>;
    case 'history':
      return <History/>;
    default:
      return <WelcomeScreen setScreen={setScreen}/>;
  }
};

export default Content
