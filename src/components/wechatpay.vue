<template>
  <div></div>
</template>

<script>
export default {
  props:['htmlStr','drupJson'],
  data(){
    return{

    }
  },
  mounted(){
    this.getPay()
  },
  methods:{
    getPay(){
      var self = this
      try {
          WeixinJSBridge.invoke(
              'getBrandWCPayRequest',
              {
                  appId: this.htmlStr.appId,     //公众号名称，由商户传入
                  timeStamp: this.htmlStr.timeStamp + '',         //时间戳，自1970年以来的秒数
                  nonceStr: this.htmlStr.nonceStr, //随机串
                  package: this.htmlStr.package,
                  signType: this.htmlStr.signType,         //微信签名方式：
                  paySign: this.htmlStr.paySign, //微信签名
              },
              function (res) {
                console.log(self)
                console.log("----------------分割---------------")
                  console.log(res.err_msg)
                  //支付成功
                  if (res.err_msg == "get_brand_wcpay_request:ok") {
                    if(self.drupJson.drupUrl=='/ReallyName'){
                      self.$router.push({
                        path:self.drupJson.drupUrl,
                        query:{
                          order_id: self.drupJson.order_id
                        }
                      })
                    }else {
                      self.$router.push("/Order")
                    }
                  } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                      self.$router.push("/Order")
                  } else if (res.err_msg == "get_brand_wcpay_request:fail") {
                      let alert = self.$alert({
                       type:"1",
                       title:'温馨提示',
                       alertMessage:"支付失败，请重试",
                       btnName:'确认',
                      })
                      alert.showModal();
                  } else {
                     let alert2 = self.$alert({
                      type:"1",
                      title:'温馨提示',
                      alertMessage:"支付失败，请重试",
                      btnName:'确认',
                     })
                     alert2.showModal();
                  }
              }
          );
      } catch (e) {
          console.error(e);
      }
    }
  }
}
</script>

<style>
</style>
