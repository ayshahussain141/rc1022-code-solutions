import React from "react";
import  ReactDOM  from "react-dom";

function CustomButton(prop) {
  return <button>{prop.button}</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <CustomButton button = "Click Me!"></CustomButton>
root.render(element);
