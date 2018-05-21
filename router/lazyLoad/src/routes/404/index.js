var path = require('path')

module.exports = {
    path: '404',
  
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require(path.resolve('components/layer/NotFoundPage')))
      }, 'NotFoundPage')
    }
  }