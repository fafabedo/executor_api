export default (ctx, inject) => {

  <% console.log('options.pathName', options.pathName) %>

  inject('pathName', `<%= options.pathName %>`)

}
