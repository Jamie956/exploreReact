import { dispatcher } from "./flux.jsx";

export const add = text => {
  dispatcher.dispatch({ type: "ADD", text });
};
export const update = text => {
  dispatcher.dispatch({ type: "UPDATE", text });
};
