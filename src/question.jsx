
import React, { useState, useEffect } from "react";
import './questin.css'
import ReactDOM from "react-dom/client";
function question() {
  const [color, setColor] = useState("Select");
  const [first, setfirst] = useState("Default");
  const [count, setCount] = useState(30);
  const [set, setst] = useState(setColor)

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000);
  });

  
  const data1 = () => {
    document.write("<h1>Favrate Color </h1><input type='radio' />Red<input type='radio' />Blue<input type='radio' />Green<input type='radio' />Sky")
  }
  const data2 = () => {
    document.write("<h1>Favrate Color </h1><input type='radio' />Red<input type='radio' />Blue<input type='radio' />Green<input type='radio' />Sky")
  }

  return (
    <>
      <button>1</button>(
        return  ()  {
    document.write("<h1>Favrate Color </h1><input type='radio' />Red<input type='radio' />Blue<input type='radio' />Green<input type='radio' />Sky")
  }
      )
      <button onClick={data1}>2</button>
      <button onClick={data2}>3</button>

      <button>2</button>

     
      {/* <h1>Favrate Color </h1><input type='radio' />Red<input type='radio' />Blue<input type='radio' />Green<input type='radio' />Sky */}
    </>

  )
}

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// root.render(<question/>);

export default question



