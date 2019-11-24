import React from 'react'
import classNames from 'classnames'
import {Gauge} from "./Gauge";

const Deadlift = ({status, setStatus, setScreen}) => {
  const message = status === 'good' ? <div className="message-prim">Keep it up!</div> : (<React.Fragment>
    <div className="message-prim">Your posture is off.</div>
    <div className="message-sec">Do not forget to straighten your lower back!</div>
  </React.Fragment>);

  return (
    <div className={classNames('ex-deadlift', status === 'good' ? 'good' : 'bad')}>
      <div className="message">{message}</div>
      <Gauge status={status} setStatus={setStatus}/>
      <div className="actions">
        <div className="action button finish" onClick={() => {
          setScreen('end');
        }}>
          Finish the exercise
        </div>
      </div>
    </div>);
};

export default Deadlift;
