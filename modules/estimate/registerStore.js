// This must be relative to .nuxt since it it registered at RUNTIME
import * as estimateStore from '../modules/estimate/store/estimate.js'

export default async ({ store }) => {
  return await store.registerModule('estimate', estimateStore, {
    namespaced: estimateStore.namespaced,
  })
}
