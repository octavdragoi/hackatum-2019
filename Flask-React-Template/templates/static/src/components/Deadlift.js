import React from 'react'
import classNames from 'classnames'
import {Test} from "./Test";

const Deadlift = ({status, count, setScreen}) => {
  const message = status === 'good' ? <div className="message-prim">Keep it up!</div> : (<React.Fragment>
    <div className="message-prim">Your posture is off.</div>
    <div className="message-sec">Do not forget to straighten your lower back!</div>
  </React.Fragment>);

  return (
    <div className={classNames('ex-deadlift', status === 'good' ? 'good' : 'bad')}>
      <div className="message">{message}</div>
      {/*<div className="count">{count}</div>*/}
      <Test/>
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
