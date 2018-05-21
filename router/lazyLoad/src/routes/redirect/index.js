module.exports = {
    path: '*',
    onEnter: (_, replaceState) => replaceState(null, "/404")
  }