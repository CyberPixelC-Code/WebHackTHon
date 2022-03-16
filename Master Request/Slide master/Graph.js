var chartDom = document.getElementById('graph');
var myChart = echarts.init(chartDom);
var option;

function StartPointGraph(){

if (myChart != "")
{
	myChart.dispose();
	myChart = echarts.init(document.getElementById('graph'));
}

myChart.showLoading();

option = {
  series: [
    {
      type: 'gauge',
      progress: {
        show: true,
        width: 18
      },
      axisLine: {
        lineStyle: {
          width: 18
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        distance: 25,
        color: '#999',
        fontSize: 20
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 25,
        itemStyle: {
          borderWidth: 10
        }
      },
      title: {
        show: false
      },
      detail: {
        valueAnimation: true,
        fontSize: 60,
        offsetCenter: [0, '70%'],
        formatter: function (value) {
          return value.toFixed(0) + '%';
        }
      },
      data: [
        {
          value: percent
        }
      ]
    }
  ]
};
myChart.hideLoading();
option && myChart.setOption(option);
}//End of func


StartPointGraph();

