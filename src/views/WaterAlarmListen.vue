<template>
  <div class="waterContent">
    <div class="waterTitle">
      <p>单位名称：云立酒店（物业）</p>
      <p>安装位置：室内消火栓</p>
      <p>最后时间：2020-02-21</p>
      <p>水压传感器（MPa）</p>
    </div>
    <div class="waterListen" id="waterListen"></div>
    <div class="waterAnsiy">
      <p>设备最近数据分析</p>
    </div>
  </div>
</template>

<script>

export default{
  mounted() {
    this.drawLine()
  },
  methods:{
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('waterListen'))
      var colors = ['#5793f3', '#d14a61', '#ead10e'];
      // 绘制图表
      myChart.setOption({
         backgroundColor: '#1b1b1b',
            tooltip: {
                formatter: '{a} <br/>{c} {b}'
            },
            series: [
            {
                name: '速度',
                type: 'gauge',
                min: 0,
                max: 100,
                splitNumber: 10,
                radius: '80%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                        width: 3,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                },
                axisTick: {            // 坐标轴小标记
                    length: 15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length: 25,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 3,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {           // 分隔线
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5
                },
                title: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
                    backgroundColor: 'rgba(30,144,255,0.8)',
                    borderWidth: 1,
                    borderColor: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5,
                    offsetCenter: [0, '50%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#fff'
                    }
                },
                data: [{value: 40}]
            }

        ]
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.waterContent
  background-color #4d5dbf
 .waterTitle
    padding-top 20px
    p
      font-size 28px
      color #fff
      padding 15px 0
 .waterListen
    width 100%
    height 500px
 .waterAnsiy
    color #fff
    padding-top 20px
    p
      font-size 36px
</style>
