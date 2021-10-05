import path from 'path'

const consoleObjectKeys = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`)
  }
}

export default function(moduleOptions) {
  consoleObjectKeys(this);
  console.log(moduleOptions)

  this.extendRoutes( routes => {
    routes.push({
      name: 'items',
      path: `/${moduleOptions.pathName}`,
      component: '~/modules/sample/pages/items.vue'
    })
    routes.push({
      name: 'item',
      path: `/${moduleOptions.pathName}/:id`,
      component: '~/modules/sample/pages/_id.vue'
    })
  })

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: {
      pathName: moduleOptions.pathName
    }
  })

  this.addPlugin({
    src: path.resolve(__dirname, 'storePlugin.js')
  })
}
