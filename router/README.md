```
===Routers===
<BrowserRouter> 用在有响应请求server
<HashRouter> 用在静态文件server

===Route===
<Route> 的属性path 与location’s pathname比较,如果匹配就渲染
<Route> 没有属性path,就总是匹配
<Switch> 包含多个<Route> ,它会遍历所有的<Route>元素,渲染第一个匹配的<Route> 

===Route渲染属性===
component 它的值就是一个component
render 它的值是一个函数
children

===Navigation===
<Link> 相当于<a>
<NavLink> 有activeClassName属性,与current location匹配时,变为"active"
<Redirect> 重定向
```