

var ROOT_PATH = 'https://echarts.apache.org/examples';

var chartDom = document.getElementById('coolgraph');
var myChart = echarts.init(chartDom);
var option;

var paperDataSolar =
  'css/images/solar';
var paperDataWind = 'css/images/wind';
var dataSmr = 'css/images/smr';

var average = 8844;

option = {
  backgroundColor: '#0f375f',
  tooltip: {},
  legend: {
    textStyle: { color: '#ddd' }
  },
  xAxis: [
    {
      data: ['Christmas Wish List', 'Qomolangma', 'Kilimanjaro'],
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        margin: 20,
        color: '#ddd',
        fontSize: 14
      }
    }
  ],
  yAxis: {
    splitLine: { show: false },
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false }
  },
  markLine: {
    z: -1
  },
  animationEasing: 'elasticOut',
  series: [
    {
      type: 'pictorialBar',
      name: 'All',
      emphasis: {
        scale: true
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
        fontSize: 16,
        color: '#e54035'
      },
      data: [
        {
          value: 13000,
          symbol: 'image:' + paperDataSolar,
          symbolRepeat: true,
          symbolSize: ['130%', '20%'],
          symbolOffset: [0, 10],
          symbolMargin: '-30%',
          animationDelay: function (dataIndex, params) {
            return params.index * 30;
          }
        },
        {
          value: 8844,
          symbol:
            'image://' + ROOT_PATH + '/data/asset/img/hill-Qomolangma.png',
          symbolSize: ['200%', '105%'],
          symbolPosition: 'end',
          z: 10
        },
        {
          value: 5895,
          symbol:
            'image://' + ROOT_PATH + '/data/asset/img/hill-Kilimanjaro.png',
          symbolSize: ['200%', '105%'],
          symbolPosition: 'end'
        }
      ],
      markLine: {
        symbol: ['none', 'none'],
        label: {
          show: false
        },
        lineStyle: {
          color: '#e54035',
          width: 2
        },
        data: [
          {
            yAxis: average
          }
        ]
      }
    },
    {
      name: 'All',
      type: 'pictorialBar',
      barGap: '-100%',
      symbol: 'circle',
      itemStyle: {
        color: '#185491'
      },
      silent: true,
      symbolOffset: [0, '50%'],
      z: -10,
      //The circles for the bottom of the image
      data: [
        {
          value: 1,
          symbolSize: ['150%', 50]
        },
        {
          value: 1,
          symbolSize: ['200%', 50]
        },
        {
          value: 1,
          symbolSize: ['200%', 50]
        }
      ]
    }
  ]
};

option && myChart.setOption(option);