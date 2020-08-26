// @ts-check
/// <reference types="./typings" />

{
  /** Prefix your template with `html` to have Prettier auto-format it. */
  const html = String.raw

  const app = Vue.createApp({
    template: html`
      <div class="p-6">
        <h1 class="font-bold text-gray-600">
          <router-link to="/">vuetoy3</router-link>
        </h1>
        <router-view></router-view>
      </div>
    `,
  })

  /** @type {import('vue-router').RouteRecordRaw[]} */
  const routes = []

  routes.push({
    path: '/',
    component: {
      template: html`<div class="max-w-xl">
        <p>
          vuetoy3 is a minimalistic boilerplate for quickly building web
          applications based on Vue 3. It does not require any build tool or
          development server.
        </p>
      </div>`,
    },
  })

  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes,
  })

  app.use(router)

  Object.assign(window, { vm: app.mount('#app') })
}
