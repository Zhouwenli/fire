<template>
  <div class="visual" id="visual" >

  </div>
</template>

<script>
export default{
  data(){
    return{

    }
  },
  mounted() {
    this.drawLine()
  },
  methods:{

    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('visual'))
      var _this = this
      // 绘制图表
      myChart.setOption({
        title: {
          text: '云岩区可视设备',
          left: 'center'
        },
        tooltip:{
          formatter: function (params,ticket,callback) {
            _this.$router.push('/VisualSuperList')
          }
        },
        dataset: {
          source: [
              [0,'中央未来方舟'],
              [1,'云岩公安局'],
              [2,'中华社区'],
              [4,'中环社区'],
              [5,'延中社区'],
              [3,'延中社区1'],
              [0,'延中社区2'],
              [1,'延中社区3'],
              [5,'延中社区4'],
              [3,'延中社区5'],
              [0,'延中社区6'],
              [1,'延中社区7'],
              [5,'延中社区8'],
              [0,'中央未来方舟1'],
              [1,'云岩公安局1'],
              [2,'中华社区1'],
              [4,'中环社区1'],
          ]
      },
      grid: {containLabel: true},
      xAxis: {name: '设备数'},
      yAxis: {type: 'category'},
      visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 0,
          max: 5,
          text: ['High Score', 'Low Score'],
          // Map the score column to color
          dimension: 0,
          inRange: {
              color: ['#D7DA8B', '#E15457']
          }
      },
      series: [
          {
              type: 'bar',
              encode: {
                  // Map the "amount" column to X axis.
                  x: '设备数',
                  // Map the "product" column to Y axis
                  y: 'product'
              }
          }]
      })
    },

  }
}
</script>

<style scoped lang="stylus">
.visual
  width 100%
  height calc(100vh)
</style>
