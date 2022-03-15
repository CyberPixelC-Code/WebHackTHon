

var ROOT_PATH = 'https://echarts.apache.org/examples';

var chartDom = document.getElementById('coolgraph');
var myChart = echarts.init(chartDom);
var option;

var paperDataSolar =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fflat-solar-panel-icon-vector-id501279295%3Fk%3D6%26m%3D501279295%26s%3D612x612%26w%3D0%26h%3D_XS2MSj-Dlx1pFOt3y2ZjzQ5frIoCwaMJr6u2CzWa8A%3D&f=1&nofb=1';
var paperDataWind = '';
var dataSmr = '';

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
          symbol: 'image://' + paperDataSolar,
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