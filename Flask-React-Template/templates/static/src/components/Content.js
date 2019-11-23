import React from 'react'
import WelcomeScreen from "./WelcomeScreen";
import Menu from "./Menu";
import ExerciseSelection from "./ExerciseSelection";
import Deadlift from "./Deadlift";
import End from "./End";

const Content = ({screen, setScreen}) => {
  switch (screen) {
    case 'menu':
      return <Menu setScreen={setScreen}/>;
    case 'exerciseSelection':
      return <ExerciseSelection setScreen={setScreen}/>;
    case 'ex-deadlift':
      return <Deadlift status="good" count={0} setScreen={setScreen}/>;
    case 'end':
      return <End/>;
    case 'history': // TODO implement history screen with fancy graphs and stats
    default:
      return <WelcomeScreen setScreen={setScreen}/>;
  }
};

export default Content
