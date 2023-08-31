import React, { useReducer } from "react";

const intialState: StateType = {
  count: 0,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + action.payload,
      };
    case "Decrement":
      return {
        count: state.count - action.payload,
      };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const increment = (): void => {
    dispatch({
      type: "Increment",
      payload: 10,
    });
  };

  const decrement = (): void => {
    dispatch({
      type: "Decrement",
      payload: 10,
    });
  };
  return (
    <div>
      {state.count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

type StateType = {
  count: number;
};

type ActionType = {
  type: "Increment" | "Decrement";
  payload: number;
};

export default App;
