import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { StateInterface, } from '../store';
import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route<StateInterface>(function ({ store }) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });

  Router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAdmin)) {
      store.dispatch('auth/authUser').then(() => {
        const isAuth = store.state.auth.currentUser;
        if (isAuth?.userType == 'admin' || isAuth?.userType == 'officer') {
          next();
        } else {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          });
        }
      }).catch(() => {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        });
      });
    } else if (to.matched.some(record => record.meta.requiresStudent)) {
      store.dispatch('auth/authUser').then(() => {
        const isAuth = store.state.auth.currentUser;
        if (isAuth?.userType != 'student') {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          });
        } else {
          next();
        }
      }).catch(() => {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        });
      });
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
      if (!localStorage.getItem('access-token')) {
        next()
      } else {
        store.dispatch('auth/authUser').then(() => {
          const isAuth = store.state.auth.currentUser;
          if (isAuth?.userType == 'admin' || isAuth?.userType == 'officer') {
            next({
              path: '/a/bulletin',
              query: {
                redirect: to.fullPath
              }
            });
          } else if (isAuth?.userType == 'student') {
            next({
              path: '/s/bulletin',
              query: {
                redirect: to.fullPath
              }
            });
          } else {
            next({
              path: '/login',
              query: {
                redirect: to.fullPath
              }
            });
          }
        }).catch(() => {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          });
        });
      }
    } else {
      next();
    }
  });


  return Router;
});
