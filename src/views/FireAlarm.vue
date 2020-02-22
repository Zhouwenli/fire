<template>
  <div>
    <div class="firePie" id="firePie"></div>
    <div class="fireDiv">
      <p class="fireName">待处理报警记录</p>
      <ul class="fire">
        <li　v-for="(item,index) in list">
          <p class="fireKind">单位名称：<span class="text">{{item.name}}</span></p>
          <p class="fireKind">设备名称：{{item.dev}}</p>
          <p class="fireKind">发生地点：{{item.address}}</p>
          <p class="fireKind">事件类型：{{item.type}}<span class="diff">探测器点：{{item.id}}</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "echarts/lib/chart/pie"
import "echarts/lib/chart/line"
import "echarts/lib/chart/bar"
export default{
  name:'FireAlarm',
  data(){
    return{
      list:[{
        name:'北京华联综合超市股份有限公司贵阳第三分公司',
        dev:'北京华联综合超市',
        address:'未知',
        type:'火警',
        id:'00981013'
      },{
        name:'北京华联综合超市',
        dev:'北京华联综合超市',
        address:'未知',
        type:'火警',
        id:'00981013'
      },{
        name:'北京华联综合超市股份有限公司贵阳第三分公司',
        dev:'北京华联综合超市',
        address:'未知',
         type:'火警',
        id:'00981013'
      },{
        name:'北京华联综合超市股份有限公司贵阳第三分公司',
        dev:'北京华联综合超市',
        address:'未知',
        type:'火警',
        id:'00981013'
      },{
        name:'北京华联综合超市股份有限公司贵阳第三分公司',
        dev:'北京华联综合超市',
        address:'未知',
         type:'火警',
        id:'00981013'
      },{
        name:'北京华联综合超市股份有限公司贵阳第三分公司',
        dev:'北京华联综合超市',
        address:'未知',
        type:'火警',
        id:'00981013'
      }]
    }
  },
  mounted(){
    this.drawLine()
  },
  methods:{
    drawLine(){
      let myChart = this.$echarts.init(document.getElementById('firePie'))
      var colors = ['#5793f3', '#d14a61', '#ead10e'];
      // 绘制图表
      myChart.setOption({
        color: colors,
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    {value: 335, name: '火警'},
                    {value: 310, name: '故障'},
                    {value: 234, name: '其他'},

                ],
                label : {
                　　　　normal : {
                　　　　　　formatter: '{b} :  {c} \n ({d}%)',
                　　　　　　textStyle : {
                　　　　　　　　fontWeight : 'normal',
                　　　　　　}
                　　　　}
                　　},
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      })
    }

  }
}
</script>

<style scoped lang="stylus">
.firePie
  width 100%
  height 500px
.fireDiv
  .fireName
    font-size 28px
    color #F43530
    height 80px
    line-height 80px
    text-align left
    text-indent 2em
    background-color #DFDFDD
  .fire
    width 95%
    margin 0 auto
    li
      box-shadow: #888 1px 1px 10px
      padding 10px 15px
      border-radius 10px
      margin-top 25px
      .fireKind
        font-size 28px
        color #666666
        text-align left
        padding 5px 0
        line-height 45px
        overflow hidden
        .text
          width 78%
          float right
          font-size 28px
          text-align left
        .diff
          float right

</style>
