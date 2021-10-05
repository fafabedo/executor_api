
const path = require('path')

// moduleOptions can pass config params from nuxt.config.js
module.exports = function registerModule(moduleOptions) {
  // Automatically register all components of the module
  this.nuxt.hook('components:dirs', (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      path: path.resolve(__dirname, 'components'),
      prefix: 'bt-customer'
    })
  })

  // Add module routes to global router list
  this.extendRoutes((routes) => {
    routes.unshift({
      name: 'customer',
      path: '/customers',
      component: path.resolve(__dirname, 'pages/CustomersBoard.vue'),
    })
  })

  this.addPlugin(path.resolve(__dirname, 'registerStore.js'))
}
