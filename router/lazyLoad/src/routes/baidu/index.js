var path = require('path')


module.exports = {
    path: 'baidu',
  
    getChildRoutes(partialNextState, cb) {
      require.ensure([], (require) => {
        cb(null, [
          require('./routes/result'),
          require('./routes/frequency')
        ])
      })
    },
  
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require(path.resolve('components/layer/BaiduPage')))
      }, 'BaiduPage')
    }
  }