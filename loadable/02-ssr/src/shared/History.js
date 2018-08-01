import { createMemoryHistory } from "history";
export default () => {
  const history = __isClient__ ? createBrowserHistory() : createMemoryHistory();
};
