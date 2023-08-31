import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state: StateProps, action: RandomActionProps) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        Reset
      </button>
    </>
  );
};

type StateProps = {
  count: number;
};

type ActionProps = {
  type: "increment" | "decrement" | "reset";
  payload?: number;
};

//* ----------- solution is Discriminated Union in TypeScript ----------------
type UpdateActionProps = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetActionTypes = {
  type: "reset";
};

type RandomActionProps = UpdateActionProps | ResetActionTypes;
