import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Router, Route } from "react-router-dom";

// bundle模型用来异步加载组件
import Bundle from './bundle.js';

// 引入单个页面（包括嵌套的子页面）
// 同步引入
import Index from './app/index.js';
// 异步引入
import ListContainer from 'bundle-loader?lazy&name=app-[name]!./app/list.js';

const List = () => (
    <Bundle load={ListContainer}>
        {(List) => <List />}
    </Bundle>
)

// ...



// ...

const Demo2 = () => {
	return (
		<div>
			<h1>Hello World.</h1>
		</div>
	)
}

ReactDOM.render(
    (
        // <HashRouter>
        //     <Router basename="/">
        //         <div>
        //             <Route exact path="/" component={Index} />
        //             <Route path="/list" component={List} />
        //         </div>
        //     </Router>
        // </HashRouter>
        <Demo2 />
    ), document.getElementById('root')
);