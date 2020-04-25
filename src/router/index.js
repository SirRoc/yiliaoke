import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import broadcast from '@/components/broadcast'
import order_details from '@/components/order-details'
import set_group from '@/components/set-group'
import group_list from '@/components/group-list'
import datetimePicker from '@/components/datetimePicker'
import course from '@/components/course'
import order from '@/components/order'
import personal_info from '@/components/personal-info'
import person_wallet from '@/components/person-wallet'

const LiveCourse = () => import(/* webpackChunkName: "group-course" */ '@/pages/course/LiveCourse')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '/home', name:'home', component: home },
    { path: '/broadcast', name:'broadcast', component: broadcast },
    { path: '/order-details', name:'order_details', component: order_details },
    { path: '/set-group', name:'set_group', component: set_group },
    { path: '/group-list', name:'group_list', component: group_list },
    { path: '/datetimePicker', name:'datetimePicker', component: datetimePicker },
    { path: '/course', name:'course', component: course },
    { path: '/order', name:'order', component: order },
    { path: '/personal-info', name:'personal_info', component: personal_info },
    { path: '/person-wallet', name:'person_wallet', component: person_wallet },
    { path: '/liveCourse', name:'liveCourse', component: LiveCourse },
  ]
})
