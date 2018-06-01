{/* <HashRouter>
    <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/dashboard' component={Dashboard} />
    </Switch>
</Router> */}


btn.addEventListener("click", e => {
    import("/components/chart")
      .then(mod => {
        someOperate(mod);
      })
      .catch(e => console.log("err", e));
  });
  