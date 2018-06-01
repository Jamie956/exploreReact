import Bundle from "./Bundle";
const Dashboard = props => (
  <Bundle load={() => import("./Dashboard")}>
    {Dashboard => <Dashboard {...props} />}
  </Bundle>
);
