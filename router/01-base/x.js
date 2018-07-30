import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Link,
  withRouter,
  Switch,
  Redirect
} from "react-router-dom";

// //simple
// const App1 = () => (
//   <BrowserRouter>
//     <div>
//       <Link to="/">Home</Link> |
//       <Link to="/about">About</Link>
//       <hr />
//       <Route exact path="/" component={() => <div>Home</div>} />
//       <Route path="/about" component={() => <div>About</div>} />
//     </div>
//   </BrowserRouter>
// );

// //路由渲染
// const App10 = () => (
//   <BrowserRouter>
//     <Route exact path="/" render={() => <h3>halo</h3>} />
//   </BrowserRouter>
// );

//获取父路由信息
// const Topics = props => {
//   console.log(props);
//   return <div>halo</div>;
// };
// const App2 = () => (
//   <BrowserRouter>
//     <div>
//       <Link to="/topics">topics</Link>
//       <hr />
//       <Route path="/topics" component={Topics} />
//     </div>
//   </BrowserRouter>
// );

// //路由参数匹配
// const Home = ({ match }) => {
//   console.log(match);
//   return <div />;
// };

// const App3 = () => (
//   <BrowserRouter>
//     <div>
//       <Link to="/123">Item</Link> |
//       <Link to="/item/asc">asc</Link> |
//       <Link to="/item/desc">desc</Link>
//       <hr />
//       <Route exact path="/:id" component={Home} />
//       <Route exact path="/item/:dir(asc|desc)" component={Home} />
//     </div>
//   </BrowserRouter>
// );

// //子组件获取router信息
// const About = withRouter(props => {
//   console.log(props);
//   return <button onClick={() => props.history.push("/about")}>about</button>;
// });
// // const About = props => {
// //   console.log(props)
// //   return <button onClick={() => props.history.push("/about")}>about</button>;
// // };

// const App4 = () => (
//   <BrowserRouter>
//     <About />
//   </BrowserRouter>
// );

//自定义路由
const MyRoute = props => {
  console.log(props);
  const { component: Component, ...rest } = props;
  return <Route {...rest} render={props => <Component {...props} />} />;
};

const App5 = () => (
  <BrowserRouter>
    <div>
      <Link to="/home">home</Link>
      <MyRoute path="/home" component={() => <h3>halo</h3>} />
    </div>
  </BrowserRouter>
);

//重定向
const App8 = () => (
  <BrowserRouter>
    <div>
      <Link to="/re">redirected to about</Link>
      <hr />
      <Switch>
        <Redirect from="/re" to="/about" />
        <Route path="/" exact component={() => <h1>home</h1>} />
        <Route path="/about" component={() => <h1>about</h1>} />
      </Switch>
    </div>
  </BrowserRouter>
);

//不匹配
const App6 = () => (
  <BrowserRouter>
    <div>
      <Link to="/xx">no match</Link>
      <hr />
      <Switch>
        <Route path="/" exact component={() => <h1>home</h1>} />
        <Route component={() => <h1>No match</h1>} />
      </Switch>
    </div>
  </BrowserRouter>
);

//config
const routes1 = [
  {
    path: "/",
    exact: true,
    main: () => <h2>home</h2>
  },
  {
    path: "/doc",
    main: () => <h2>doc</h2>
  },
  {
    path: "/about",
    main: () => <h2>about</h2>
  }
];

const App9 = () => (
  <BrowserRouter>
    <div>
      <Link to="/">home</Link> |
      <Link to="/doc">doc</Link> |
      <Link to="/about">about</Link>
      <hr />
      {routes1.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </BrowserRouter>
);

//子路由
const Parent = ({ routes }) => (
  <div>
    <Link to="/parent/child1">child1</Link> |
    <Link to="/parent/child2">child2</Link>
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
);

const GenetateRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};

const routes = [
  {
    path: "/home",
    component: () => <h2>home</h2>
  },
  {
    path: "/parent",
    component: Parent,
    routes: [
      {
        path: "/parent/child1",
        component: () => <h3>child1</h3>
      },
      {
        path: "/parent/child2",
        component: () => <h3>child2</h3>
      }
    ]
  }
];

const App7 = () => (
  <BrowserRouter>
    <div>
      <Link to="/parent">parent</Link> |
      <Link to="/home">home</Link>
      {routes.map((route, i) => <GenetateRoutes key={i} {...route} />)}
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App4 />, document.getElementById("root"));
