var chartDom = document.getElementById('coolgraph');
var myChart = echarts.init(chartDom);
var option;
var solarVal = 0;
var windVal = 0;
var nucVal = 0;
var dayText = document.getElementById('dayText');
var windText = document.getElementById('windText');

function StartPointGraph(){

if (myChart != "")
{
	myChart.dispose();
	myChart = echarts.init(document.getElementById('coolgraph'));
	nucVal = 0;
	solarVal = 0;
	windVal = 0;
}

myChart.showLoading();
            
$.get('data/gridwatch-3.json', {}, function(response) {
   dataArr = response;
   console.log(dataArr);
   AddSolar();
   AddWind();
   AddNuc();
   LoadGraph();
});

}

function AddSolar(){
	if (isDay === true){
		for (let i = 0; i < dataArr.length; i++) {
			solarVal += dataArr[i]['solar'] / 144;
		}//End of loop
		solarVal = Math.floor(solarVal);
		dayText.innerHTML = "daytime";
	}
	else{
		dayText.innerHTML = "night";
	}
}//End of function

function AddWind(){
	if (isWindy === true){
		for (let i = 0; i < dataArr.length; i++) {
			windVal += dataArr[i]['wind'] / 144;
		}//End of loop
		windVal = Math.floor(windVal);
		windText.innerHTML = "blowing";
	}
	else{
		windText.innerHTML = "not blowing";
	}
}//end of function

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
      data: [
      	{
      		value: windVal,
      		itemStyle: {color: 'blue'}
      	}, 
      	{
      		value: solarVal,
      		itemStyle: {color: 'red'}
      	}, 
      	{
      		value: nucVal,
      		itemStyle: {color: 'green'}
      	}
      ]
    }
  ]
};
myChart.hideLoading();
option && myChart.setOption(option);
}

StartPointGraph();
