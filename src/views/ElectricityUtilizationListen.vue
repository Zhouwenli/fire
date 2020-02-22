<template>
  <div class="electricityContent">
    <p class="conTip">单位名称：第五人民医院</p>
    <p class="conTip">安装位置：暂无安装位置</p>
    <div class="tabbar">
      <cube-tab-bar v-model="selectedLabel" show-slider>
        <cube-tab v-for="(item, index) in tabs" :icon="item.icon" :label="item.label" :key="item.label">
        </cube-tab>
      </cube-tab-bar>
    </div>
    <cube-tab-panels v-model="selectedLabel">
      <cube-tab-panel label="电压">
        <p class="selectKind"><span class="kind">电压</span><span class="time">2020年2月20日-2020年2月20日</span></p>
        <div class="selectContent" id="selectContent">

        </div>
        <div class="selectItem">
          <p class="itemTitle">温度</p>
          <ul class="item">
            <li>A线温度</li>
            <li>B线温度</li>
            <li>C线温度</li>
            <li>N线温度</li>
          </ul>
        </div>
      </cube-tab-panel>
      <cube-tab-panel label="电流">
      </cube-tab-panel>
      <cube-tab-panel label="温度">
      </cube-tab-panel>
    </cube-tab-panels>
  </div>
</template>

<script>
  export default {
    name: 'ElectricityUtilizationListen',
    data() {
      return {
        selectedLabel: '电压',
        tabs: [{
          label: '电压',
        }, {
          label: '电流',
        }, {
          label: '温度',
        }],
      }
    },
    mounted(){
       this.drawLine()
    },
    methods:{
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('selectContent'))
        var colors = ['#5793f3', '#d14a61', '#ead10e'];
        // 绘制图表
        myChart.setOption({
          color: colors,
          tooltip: {
              trigger: 'none',
              axisPointer: {
                  type: 'cross'
              }
          },
          legend: {
              data:['A相电压', 'B相电压','C相电压']
          },
          grid: {
              top: 70,
              bottom: 50
          },
          xAxis: [
              {
                  type: 'category',
                  axisTick: {
                      alignWithLabel: true
                  },
                  axisLine: {
                      onZero: false,
                      lineStyle: {
                          color: colors[1]
                      }
                  },
                  axisPointer: {
                      label: {
                          formatter: function (params) {
                              return '降水量  ' + params.value
                                  + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                          }
                      }
                  },
                  data: ['2020-1:00', '2020-2:00', '2020-3:00', '2020-4:00', '2020-5:00', '2020-6:00', '2020-7:00']
              },
              {
                  type: 'category',
                  axisTick: {
                      alignWithLabel: true
                  },
                  axisLine: {
                      onZero: false,
                      lineStyle: {
                          color: colors[0]
                      }
                  },
                  axisPointer: {
                      label: {
                          formatter: function (params) {
                              return '降水量  ' + params.value
                                  + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                          }
                      }
                  },
                 data: ['2020-1:00', '2020-2:00', '2020-3:00', '2020-4:00', '2020-5:00', '2020-6:00', '2020-7:00']
              }
          ],
          yAxis: [
              {
                  type: 'value'
              }
          ],
          series: [
              {
                  name: 'A相电压',
                  type: 'line',
                  xAxisIndex: 1,
                  smooth: true,
                  data: [110, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
              },
              {
                  name: 'B相电压',
                  type: 'line',
                  smooth: true,
                  data: [95, 89, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
              },
              {
                  name: 'C相电压',
                  type: 'line',
                  smooth: true,
                  data: [4, 8, 5.6, 10.7, 38.3, 89.2, 87.6, 106.6, 55.4, 99.4, 10.3, 110.7]
              }
          ]
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
.cube-tab-bar-slider
  background-color #3293EA
  height 3px
.electricityContent
  background-color #4d5dbf
  color #fff
  font-size 28px
  .conTip
     padding 15px 0
  .tabbar
    height 80px
    background-color #FFFFFF
    .cube-tab-bar
      height 80px
      .cube-tab_active
        color #3293EA
  .selectKind
    padding 30px 20px
    .kind
      float left
    .time
      float right
  .selectContent
    width 95%
    height 600px
    border 2px solid #FFFFFF
    border-radius 10px
    margin 30px auto
  .selectItem
    width 95%
    background-color #FFFFFF
    margin 0 auto
    .itemTitle
      height 80px
      line-height 80px
      font-size 34px
      color #4d5dbf
      background-color #DFDFDD
    .item
      overflow hidden
      li
        height 80px
        line-height 80px
        font-size 30px
        color #666
        text-align left
        text-indent 2em
        border-top 1px solid #DFDFDD

</style>
