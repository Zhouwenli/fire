import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import Guide from '../views/Guide.vue'
import ElectricityUtilization from '../views/ElectricityUtilization.vue' //用电隐患
import ElectricityUtilizationList from '../views/ElectricityUtilizationList.vue' //用电隐患
import ElectricityUtilizationListen from '../views/ElectricityUtilizationListen.vue' //用电隐患
import FireAlarm from '../views/FireAlarm.vue'
import WaterAlarm from '../views/WaterAlarm.vue'
import WaterAlarmList from '../views/WaterAlarmList.vue'
import WaterAlarmListen from '../views/WaterAlarmListen.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    // name: 'Index',
    component: Index,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/guide',
        component: Guide
      },
      {
        path: '/ElectricityUtilization',
        name: 'ElectricityUtilization',
        component: ElectricityUtilization,
        meta:{
          title:'智慧用电隐患预警'
        }
      }


    ]
  },
  {
    path: '/ElectricityUtilizationList',
    name: 'ElectricityUtilizationList',
    component: ElectricityUtilizationList,
    meta:{
      title:'智慧用电隐患预警'
    }
  },
  {
    path: '/ElectricityUtilizationListen',
    name: 'ElectricityUtilizationListen',
    component: ElectricityUtilizationListen,
    meta:{
      title:'智慧用电隐患预警'
    }
  },
  {
    path: '/FireAlarm',
    name: 'FireAlarm',
    component: FireAlarm,
    meta:{
      title:'火灾自动报警联网'
    }
  },
  {
    path: '/WaterAlarm',
    name: 'WaterAlarm',
    component: WaterAlarm,
    meta:{
      title:'建筑消防用水监测'
    }
  },
  {
    path: '/WaterAlarmList',
    name: 'WaterAlarmList',
    component: WaterAlarmList,
    meta:{
      title:'建筑消防用水监测'
    }
  },
  {
    path: '/WaterAlarmListen',
    name: 'WaterAlarmtListen',
    component: WaterAlarmListen,
    meta:{
      title:'实时监测'
    }
  },


]

const router = new VueRouter({
  routes
})

export default router
