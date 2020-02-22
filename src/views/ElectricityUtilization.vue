<template>
  <div>
    <div class="ElectricityUtilization">
      <div id="chart1"></div>
      <ul>
        <li>
          <router-link :to="{path:'/ElectricityUtilizationList'}">
            <span class="electLable"><i class="cubeic-remove" style="color: #f1b444;font-size: 28px;vertical-align: middle;padding-right: 20px;"></i>离线设备</span><span class="countValue">111<i class="cubeic-arrow"></i></span>
          </router-link>
        </li>
        <li>
          <router-link :to="{path:'/ElectricityUtilizationList'}">
            <span class="electLable"><i class="cubeic-right" style="color: #3293ea;font-size: 28px;vertical-align: middle;padding-right: 20px;"></i>在线设备</span><span class="countValue">159<i class="cubeic-arrow"></i></span>
          </router-link>
        </li>
        <li>
          <router-link :to="{path:'/ElectricityUtilizationList'}">
            <span class="electLable"><i class="cubeic-wrong" style="color: #ea4699;font-size: 28px;vertical-align: middle;padding-right: 20px;"></i>报警设备</span><span class="countValue">2<i class="cubeic-arrow"></i></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import "echarts/lib/chart/pie"
  import "echarts/lib/chart/line"
  import "echarts/lib/chart/bar"
  export default {
    name: 'ElectricityUtilization',
    components: {
    },
    data() {
      return {

      }
    },
    mounted() {
      this.drawLine()
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('chart1'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '各状态百分比',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            top: 'bottom',
            data: ['在线', '离线', '报警']
          },
          series: [
            {
              name: '面积模式',
              type: 'pie',
              radius: [30, 110],
              // center: ['75%', '50%'],
              roseType: 'area',
              label : {
          　　　　normal : {
          　　　　　　formatter: '{b} :  {c} \n ({d}%)',
          　　　　　　textStyle : {
          　　　　　　　　fontWeight : 'normal',
          　　　　　　}
          　　　　}
          　　},
              data: [{
                  value: 10,
                  name: '在线'
                },
                {
                  value: 5,
                  name: '离线'
                },
                {
                  value: 15,
                  name: '报警'
                },
              ]
            }
          ],
          color:['#1dd63c','#f7ef06','#d64828']
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .ElectricityUtilization
   padding-top 80px
   background-color #fff
   padding-bottom 120px
   #chart1
    position relative
    width 100%
    height 650px
   ul
    width 80%
    margin 20px auto
    padding-top 30px
    li
      height 100px
      line-height 100px
      font-size 32px
      box-shadow: #888 1px 1px 10px
      margin-bottom 30px
      border-radius 10px
      color #000
      .electLable
        height 100px
        float left
        padding-left 20px
        display inline-block
        vertical-align middle
      .countValue
        float right
        padding-right 20px
</style>
