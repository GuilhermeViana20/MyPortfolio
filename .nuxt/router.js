import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0bc7e47e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _35ba479e = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _11dbf493 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _34671458 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _a9510f66 = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _6bddf37c = () => interopDefault(import('..\\pages\\project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _706bc5e9 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _2a3bf7de = () => interopDefault(import('..\\pages\\service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _19d3e886 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0bc7e47e,
    name: "about"
  }, {
    path: "/blog",
    component: _35ba479e,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _11dbf493,
    name: "blog-details"
  }, {
    path: "/contato",
    component: _34671458,
    name: "contact"
  }, {
    path: "/project",
    component: _a9510f66,
    name: "project"
  }, {
    path: "/project-details",
    component: _6bddf37c,
    name: "project-details"
  }, {
    path: "/service",
    component: _706bc5e9,
    name: "service"
  }, {
    path: "/service-details",
    component: _2a3bf7de,
    name: "service-details"
  }, {
    path: "/",
    component: _19d3e886,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
