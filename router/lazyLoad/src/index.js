// ReactDOM.render(
//     (
//         <Router history={browserHistory}>
//             {/* 主页 */}
//             <Route path="/" component={App}>
//                 {/* 默认 */}
//                 <IndexRoute component={HomePage} />

//                 {/* baidu */}
//                 <Route path="/baidu" component={BaiduPage}>
//                     <Route path="result" component={BaiduResultPage} />
//                     <Route path="frequency" component={BaiduFrequencyPage} />
//                 </Route>

//                 {/* 404 */}
//                 <Route path='/404' component={NotFoundPage} />

//                 {/* 其他重定向到 404 */}
//                 <Redirect from='*' to='/404' />
//             </Route>
//         </Router>
//     ), document.getElementById('app')
// );

import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router-dom";

const rootRoute = {
    path: '/',
    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('./components/layer/HomePage'))
            }, 'HomePage')
        },
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Main'))
        }, 'Main')
    },
    childRoutes: [
        require('./routes/baidu'),
        require('./routes/404'),
        require('./routes/redirect')
    ]
}

ReactDOM.render(
    (
        <Router
            history={browserHistory}
            routes={rootRoute}
        />
    ), document.getElementById('root')
);