import { useState } from 'react'  //this is hooks
// winget install --id Git.Git -e --source winget

import './App.css'

function App() {

  const [counter, setcounter] = useState(0);
  const addvalue = () => {
    // counter = counter + 1;  //same as setcounter there is no problem of use this\

    if (counter === 20) {
      setcounter(0)
    }
    else {
      setcounter(counter + 1);

    }
    // console.log("value added", counter);
  }
  // let counter = 0;

  //remove the value

  const removevalue = () => {

    if(counter === 0){ 
      return;
    }
    else
    {
      setcounter(counter - 1)
    }
  }


  return (
    <>
      <h1>Tally Counter</h1>
      <h1>{counter}</h1>
      <button onClick={addvalue}>Add Value</button>
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
