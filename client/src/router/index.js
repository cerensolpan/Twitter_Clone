import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import Notification from '../views/Notification.vue'
import Messages from '../views/Messages.vue'
import Bookmarks from '../views/Bookmarks.vue'
import Lists from '../views/Lists.vue'
import Profile from '../views/Profile.vue'
import More from '../views/More.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/twitter',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/notification',
    name: 'Notification',
    component: Notification
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/bookmark',
    name: 'Bookmarks',
    component: Bookmarks
  },
  {
    path: '/lists',
    name: 'Lists',
    component: Lists
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/more',
    name: 'More',
    component: More
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router