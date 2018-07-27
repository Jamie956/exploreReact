```
===Router===
<BrowserRouter> 用在有响应请求server
  属性:
  basename 基本路径
  getUserConfirmation
  forceRefresh
  keyLength location.key的长度,默认是6
  children

<HashRouter> 用在静态文件server
  属性:
  basename 基本路径
  getUserConfirmation
  hashtype
    slash #/sunshine/lollipops
    noslash #sunshine/lollipops
    hashbang #!/sunshine/lollipops
  children

<StaticRouter> 用在服务端渲染,它的属性location的值是req.url

===Navigation===
<Link>
  属性:
  to
  replace 刷新current entry
  innerRef
<NavLink>
  属性:
  activeClassName 与current location匹配时,提供定义好的class元素
  activeStyle 与current location匹配时,提供定义好的class元素
  exact 精确匹配时,class/style才生效
  strict 严格模式,路径末尾需要待斜杠
  isActive 参数是active时执行的函数
<Redirect> 重定向


===Route===
<Route> 的属性path 与location’s pathname比较,如果匹配就渲染
<Route> 没有属性path,就总是匹配
<Switch> 包含多个<Route> ,它会遍历所有的<Route>元素,渲染第一个匹配的<Route>

===Route渲染属性===
component 它的值就是一个component
render 它的值是一个函数
children

```
