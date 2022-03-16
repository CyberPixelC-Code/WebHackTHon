// Specify the configuration items and data for the chart
      				var chart1 = {
        				title: {
          					text: 'ECharts Getting Started Example'
        				},
        				tooltip: {},
        				legend: {
          					data: ['sales']
        				},
        				xAxis: {
          					data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
        				},
        				yAxis: {},
        				series: [
          					{
            					name: 'sales',
            					type: 'bar',
            					data: [5, 20, 36, 10, 10, 20]
          					}
        				]
      				};
      				
      				//Chart 2
      				var chart2;

					chart2 = {
  						title: [
    						{
      							text: 'Radial Polar Bar Label Position (middle)'
    						}
  						],
  					polar: {
    					radius: [30, '80%']
  							},
  							radiusAxis: {
    							max: 4
  							},
  						angleAxis: {
    						type: 'category',
    						data: ['a', 'b', 'c', 'd'],
    						startAngle: 75
  							},
  						tooltip: {},
  						series: {
    						type: 'bar',
    						data: [2, 1.2, 2.4, 3.6],
    						coordinateSystem: 'polar',
    					label: {
      						show: true,
      						position: 'middle',
      						formatter: '{b}: {c}'
    					}
  					},
  				backgroundColor: '#fff',
  				animation: false
			};