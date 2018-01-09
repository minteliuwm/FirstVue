import Vue from 'vue'
import Router from 'vue-router'
import Page from '../components/Page'
import HelloWorld from '@/components/HelloWorld'
import Test from '../components/Test'
import TodoList from '../components/TodoList'
import TransitionDemo from '../components/TransitionDemo'
import FilterDemo from '../components/FilterDemo'
import SlotDemo from '../components/SlotDemo'
import Tabbar from '../components/Tabbar'
import Home from '../pages/home'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Page',
    component: Page
  }, {
    path: '/test',
    name: 'Test',
    component: Test
  }, {
    path: '/todo',
    name: 'TodoList',
    component: TodoList
  }, {
    path: '/transitiondemo',
    name: 'TransitionDemo',
    component: TransitionDemo
  }, {
    path: '/filterdemo',
    name: 'FilterDemo',
    component: FilterDemo
  }, {
    path: '/slotdemo',
    name: 'SlotDemo',
    component: SlotDemo
  }, {
    path: '/tabbar',
    name: 'Tabbar',
    component: Tabbar,
    props: true
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }]
})
