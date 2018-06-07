import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppBranch from '@/components/AppBranch'
import AppFacility from '@/components/AppFacility'
import AppPaidFacility from '@/components/AppPaidFacility'
import AppEmployee from '@/components/AppEmployee'
import AppCustomer from '@/components/AppCustomer'
import AppLogin from '@/components/AppLogin'
import AppRegister from '@/components/AppRegister'
import AppSeason from '@/components/AppSeason'
import AppRoom from '@/components/AppRoom'
import AppAvailableRoom from '@/components/AppAvailableRoom'
import AppRoomType from '@/components/AppRoomType'
import AppGuestPersonalReservation from '@/components/AppGuestPersonalReservation'
import AppMonthlyIncomeReport from '@/components/AppMonthlyIncomeReport'
import AppNumberOfGuests from '@/components/AppNumberOfGuests'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/branch',
      name: 'AppBranch',
      component: AppBranch
    },
    {
      path: '/facility',
      name: 'AppFacility',
      component: AppFacility
    },
    {
      path: '/paidfacility',
      name: 'AppPaidFacility',
      component: AppPaidFacility
    },
    {
      path: '/employee',
      name: 'AppEmployee',
      component: AppEmployee
    },
    {
      path: '/customer',
      name: 'AppCustomer',
      component: AppCustomer
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/cust/register',
      name: 'AppRegister',
      component: AppRegister
    },
    {
      path: '/season',
      name: 'AppSeason',
      component: AppSeason
    },
    {
      path: '/room',
      name: 'AppRoom',
      component: AppRoom
    },
    {
      path: '/availableRoom',
      name: 'AppAvailableRoom',
      component: AppAvailableRoom
    },
    {
      path: '/roomtype',
      name: 'AppRoomType',
      component: AppRoomType
    },
    {
      path: '/reservation/guest/personal',
      name: 'AppGuestPersonalReservation',
      component: AppGuestPersonalReservation
    },
    {
      path: '/report/monthlyIncome',
      name: 'AppMonthlyIncomeReport',
      component: AppMonthlyIncomeReport
    },
    {
      path: '/report/numberOfGuests',
      name: 'AppNumberOfGuests',
      component: AppNumberOfGuests
    }
  ]
})
