import React from 'react'
import Exercise from "./Exercise";

const ExerciseSelection = ({setScreen}) => {
  return (
    <React.Fragment>
      <div className="panel">
        <div className="title">
          Choose an exercise:
        </div>
      </div>
      <div className="exercises">
        <Exercise name="deadlift" displayName={"Deadlift"} setScreen={setScreen}/>
        <Exercise name="comingsoon1" displayName={"Coming soon..."} disabled={true} setScreen={setScreen}/>
        <Exercise name="comingsoon2" displayName={"Coming soon..."} disabled={true} setScreen={setScreen}/>
        <Exercise name="comingsoon3" displayName={"Coming soon..."} disabled={true} setScreen={setScreen}/>
        <Exercise name="comingsoon4" displayName={"Coming soon..."} disabled={true} setScreen={setScreen}/>
        <Exercise name="comingsoon5" displayName={"Coming soon..."} disabled={true} setScreen={setScreen}/>
      </div>
    </React.Fragment>
  )
};

export default ExerciseSelection;
