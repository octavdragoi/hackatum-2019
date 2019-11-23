import React from 'react'
import * as ApiClient from "../ApiClient";

const Test = () => {
  const [text, setText] = React.useState('');
  React.useEffect(() => {
    ApiClient.test(x => setText(x));
  });
  return (
    <div>
      {text}
    </div>
  )
};

export default Test
