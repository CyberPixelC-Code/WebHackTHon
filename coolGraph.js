var chartDom = document.getElementById('coolgraph');
var myChart = echarts.init(chartDom);
var option;
var solarVal = 0;
var windVal = 0;
var nucVal = 0;

myChart.showLoading();
            
$.get('data/gridwatch-3.json', {}, function(response) {
   dataArr = response;
   console.log(dataArr);
   AddSolar();
   AddWind();
   AddNuc();
   LoadGraph();
});

function AddSolar(){
	
	for (let i = 0; i < dataArr.length; i++) {
		solarVal += dataArr[i]['solar'] / 144;
	}//End of loop
	solarVal = Math.floor(solarVal);
}//End of function

function AddWind(){
	for (let i = 0; i < dataArr.length; i++) {
		windVal += dataArr[i]['wind'] / 144;
	}//End of loop
	windVal = Math.floor(windVal);
}

function AddNuc(){
	for (let i = 0; i < dataArr.length; i++) {
		nucVal += dataArr[i]['nuclear'] / 144;
	}//End of loop
	nucVal = Math.floor(nucVal);
}

function LoadGraph(){
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Wind', 'Solar', 'Nuclear'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: [windVal, solarVal, nucVal]
    }
  ]
};
myChart.hideLoading();
option && myChart.setOption(option);
}
