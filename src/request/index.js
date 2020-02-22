import axios from 'axios'; // 引入axios
import qs from 'qs'; // 引入qs
import url from './../utils/url.js'
import $vue from '../main.js'; // 引入vue
// axios 默认配置  更多配置查看Axios中文文档
axios.defaults.timeout = 5000; // 超时默认值
// axios.defaults.baseURL       = '/api';   // 默认baseURL

console.log( process.env);

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.withCredentials = true;
axios.defaults.responseType = 'json' // 默认数据响应类型
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
console.log($vue)
let $window = {}
let requestTime = 0//请求时间差
console.log('new date()====>',Date.now())

// http request 拦截器
// 在ajax发送之前拦截 比如对所有请求统一添加header token
axios.interceptors.request.use(
  config => {
    requestTime = Date.now() - requestTime  // 接口的时间差,当同一页面同时有多个接口请求的时候，将loading合并成一个
    let isMergeLoading = requestTime < 100?true:false//当多个请求的loading只间隔小于100ms的时候，只需要显示一个loading就可以了
    let params = config.data//配置参数
    if(!params){
      config.data={}
    }else{
      console.log("--------------请求------------------")
      config.showBg = params.showBg//是否显示白色背景
      config.requertLoading = params.requertLoading//是否在接口调用时，显示loading
    }
    config.data = qs.stringify(params)//接口的请求参数


    if(isMergeLoading){//只要当前为合并请求，那么重置requestTime为0
      requestTime = 0 //将两个请求间隔时间重新重置为0
      config.isMergeLoading = true
    }
    if(isMergeLoading && config.requertLoading){//只有设置requestLoading为true，每次请求的时候都会自动添加loading，请求结束就自动消失
      $vue.$loading.show(config.showBg)//有true的情况下，显示背景，不是true，不显示背景
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
// ajax请求回调之前拦截 对请求返回的信息做统一处理 比如error为401无权限则跳转到登陆界面
axios.interceptors.response.use(
  response => {
    console.log('config配置',response.config)
    $window.timer = null
    let config = response.config
    if(!config.isMergeLoading){//存在多个连续请求的时候,hide不启作用，需要手动关闭loading
      $window.timer && clearTimeout($window.timer)
      $window.timer = setTimeout(() => {
        $vue.$loading.hide()
        clearTimeout($window.timer)
      },500)
    }

    switch (response.data.code) {
      case 0:
        return Promise.resolve(response.data);

      case 10001:
        axios.get('account/mpoauth?callback_url='+encodeURIComponent(window.location.href)).then(res=>{
          window.location = res.data.redirect_url;
        }).catch(res=>{

        });
        response.data.msg = '未授权，请登录';
        break;

      default:
        let alert = $vue.$alert({
         type:"1",
         title:'温馨提示',
         alertMessage:response.data.msg,
         btnName:'确认'
        })
        alert.showModal();
        return Promise.reject(response.data);
    }

  },
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default axios; // 这句千万不能漏下！！！
