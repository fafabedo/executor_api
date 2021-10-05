// This must be relative to .nuxt since it it registered at RUNTIME
import * as customerStore from '../modules/customer/store/customer.js'

export default async ({ store }) => {
  return await store.registerModule('customer', customerStore, {
    namespaced: customerStore.namespaced,
  })
}
