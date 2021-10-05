// This must be relative to .nuxt since it it registered at RUNTIME
import * as workspaceStore from '../modules/workspace/store/workspace.js'

export default async ({ store }) => {
  return await store.registerModule('workspace', workspaceStore, {
    namespaced: workspaceStore.namespaced,
  })
}
