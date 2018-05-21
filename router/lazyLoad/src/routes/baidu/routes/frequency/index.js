var path = require('path')
module.exports = {
    path: 'frequency',
  
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require(path.resolve('components/layer/BaiduFrequencyPage')))
      }, 'BaiduFrequencyPage')
    }
  }