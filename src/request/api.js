import axios from './index'

export default{
  //热门搜索
  hotSummary:p => axios.post('shop/mobilecard/hotSummary', p),
  //首页
  index:p => axios.post('shop/index/index', p),
  mobilecard:p => axios.post('shop/mobilecard', p),
  //搜索条件
  searchParams:p => axios.post('shop/mobilecard/searchParams', p),
  //手机号码商品搜索,店铺手机号列表
  searchlist:p => axios.post('shop/mobilecard/search', p),
  //获取订单统计数
  badge:p => axios.post('shop/order/badge', p),
  //获取订单列表
  orderList:p => axios.post('shop/order', p),
  //订单取消
  cancelOrder:p => axios.post('shop/order/cancel', p),
  //订单确认完成
  confirmOrder:p => axios.post('shop/order/confirmFinal', p),
   //收藏列表
  productCollect:p => axios.post('shop/follow/product', p),
  //取消收藏
  productCollectDel:p => axios.post('shop/follow/product/del', p),
  //添加收藏
  productCollectAdd:p => axios.post('shop/follow/product/add', p),
  //收货地址列表
  recvaddrList:p => axios.post('shop/recvaddr', p),
  //添加收货地址
  recvaddrAdd:p => axios.post('shop/recvaddr/add', p),
  //收货地址详情(点击设置默认地址)
  recvaddrdetail:p => axios.post('shop/recvaddr/detail', p),
  //收货地址编辑
  recvaddrdetail:p => axios.post('shop/recvaddr/detail', p),
  //删除地址
  recvaddrDel:p => axios.post('shop/recvaddr/del', p),
  //编辑地址
  recvaddrEdit:p => axios.post('shop/recvaddr/edit', p),
  //订单结算页面
  orderSet:p => axios.post('shop/order/buy', p),
  //订单提交
  orderAdd:p => axios.post('shop/order/add', p),
  //微信支付
  wechatpay:p => axios.post('shop/payment/wechatpay', p),
  //商铺首页
  shopindex:p => axios.post('shop/customer/index', p),
  //店铺首页轮播图装饰
  shopdecorate:p => axios.post('shop/customer/decorate', p),
  //店铺收藏
  shopCollectAdd:p => axios.post('shop/follow/customer/add', p),
  //店铺取消收藏
  shopCollectDel:p => axios.post('shop/follow/customer/del', p),
  //店铺收藏列表
  shopCollectList:p => axios.post('shop/follow/customer', p),
  //猜你喜欢
  guessLike:p => axios.post('shop/mobilecard/like', p),
  //企业资质
  getMaterial:p => axios.post('shop/customer/material', p),
  //实名认证
  submitAuthentication:p => axios.post('shop/order/authentication', p),

}
