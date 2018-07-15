// import { dispatcher } from "./flux.jsx";

export const handleActions = action => {
  switch (action.type) {
    case "ADD": {
      console.log("ADD: ", action.text);
      break;
    }
    case "UPDATE": {
      console.log("UPDATE: ", action.text);
      break;
    }
  }
};
// dispatcher.register(handleActions.bind(handleActions));
