import React, { useReducer, useState } from 'react';
import { reducer } from "./components/reducer";
import DragComponentList from "./components/DragComponentList";
import WorkSpace from "./components/WorkSpace";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [isDrag, setIsDrag] = useState(false);
  const dispatchHandler = (component, event) => {
    var payload = {
      type: '',
      id: new Date().getTime(),
      x: event.clientX,
      y: event.clientY
    }
    switch (component) {
      case "Button":
        payload.type = "button";
        setIsDrag(true);
        dispatch({ type: "Add_Button", payload: payload });
        break;
      case "Input":
        payload.type = "input";
        setIsDrag(true);
        dispatch({ type: "Add_Input", payload: payload });
        break;
      case "Paragraph":
        payload.type = "paragraph";
        setIsDrag(true);
        dispatch({ type: "Add_Paragraph", payload: payload });
        break;
      default:
        break;
    }
  }
  const dragHoverHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div style={{ display: 'block', position: 'relative', height: '90vh' }}>
      <div className="border box-sizing-border-box" style={{ display: 'inline-block', float: 'left', width: '15%', height: '100%' }}>
        <DragComponentList dispatchHandler={dispatchHandler} />
      </div>
      <div onDragOver={dragHoverHandler} className="drop-component border box-sizing-border-box" style={{ display: 'inline-block', float: 'left', width: '80%', height: '100%', marginLeft: '2.5%' }}>
        <WorkSpace componentList={state} />
      </div>
    </div>
  );
}

export default App;
