import React from 'react'
import * as ApiClient from "../ApiClient";
import Visualization from "./Visualization";

const Test = () => {
  const [text, setText] = React.useState('');
  React.useEffect(() => {
    ApiClient.test(x => setText(x));
  });
  return (
    <div>
      {text}
      <Visualization value={text}/>
    </div>
  )
};

export default Test
