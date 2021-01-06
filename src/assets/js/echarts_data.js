import utils from './utils'
export const risk_analysis = (
	xData = [],
	y1Data = [],
	y2Data = [],
	y3Data = [],
	type
) => {
	return {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow',
			},
			show: false,
		},
		legend: {
			top: 35,
			right: 50,
			data: ['组合', '基准', '组合相对于基准'],
			selected: {
				组合: true,
				基准: false,
				组合相对于基准: false,
			},
		},
		animation: false,
		grid: [
			{
				top: 80,
				right: 50,
				bottom: 150,
			},
			{
				height: 10,
				right: 50,
				bottom: 110,
			},
			{
				height: 10,
				right: 50,
				bottom: 90,
			},
			{
				height: 10,
				right: 50,
				bottom: 70,
			},
		],
		dataZoom: [
			{
				show: true,
				start: 0,
				end: 40,
				xAxisIndex: [0, 1, 2, 3],
			},
		],
		xAxis: [
			{
				type: 'category',
				data: xData,
				gridIndex: 0,
				axisLabel: {
					color: '#333',
					interval: 0,
					// rotate: 40,
					formatter: function(value) {
						let len = utils.group(value, 2)
						return len.join('\n')
					},
				},
				axisLine: {
					lineStyle: {
						color: '#e7e7e7',
					},
				},
				axisTick: {
					lineStyle: {
						color: '#e7e7e7',
					},
				},
				zlevel: 2,
				name: '',
				nameLocation: 'start',
				nameTextStyle: {
					color: '#585858',
					padding: [0, 0, -27],
				},
			},
			{
				type: 'category',
				gridIndex: 1,
				data: y1Data,
				axisLine: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},
				zlevel: 1,
				name: '当前组合',
				nameLocation: 'start',
				nameTextStyle: {
					color: '#585858',
					padding: [0, 0, -27],
				},
				axisLabel: {
					formatter: type === 'risk' ? '{value}%' : '{value}',
					interval: 0,
				},
			},
			{
				type: 'category',
				gridIndex: 2,
				data: y2Data,
				axisLine: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},
				zlevel: 0,
				name: '基准',
				nameLocation: 'start',
				nameTextStyle: {
					color: '#585858',
					padding: [0, 0, -27],
				},
				axisLabel: {
					formatter: type === 'risk' ? '{value}%' : '{value}',
					interval: 0,
				},
			},
			{
				type: 'category',
				gridIndex: 3,
				data: y3Data,
				axisLine: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},
				zlevel: 0,
				name: '相对于基准',
				nameLocation: 'start',
				nameTextStyle: {
					color: '#585858',
					padding: [0, 0, -27],
				},
				axisLabel: {
					formatter: type === 'risk' ? '{value}%' : '{value}',
					interval: 0,
				},
			},
		],
		yAxis: [
			{
				type: 'value',
				gridIndex: 0,
				axisLabel: {
					color: '#333',
				},
				splitLine: {
					lineStyle: {
						type: 'dashed',
					},
				},
				axisLine: {
					lineStyle: {
						color: '#ccc',
					},
				},
				axisTick: {
					lineStyle: {
						color: '#ccc',
					},
				},
				axisLabel: {
					formatter: '{value}%',
				},
			},
			{
				type: 'value',
				gridIndex: 1,
				axisLabel: {
					show: false,
				},
				axisLine: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},
			},

			{
				type: 'value',
				gridIndex: 2,
				axisLabel: {
					show: false,
				},
				axisLine: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},
			},
			{
				type: 'value',
				gridIndex: 3,
				axisLabel: {
					show: false,
				},
				axisLine: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},
			},
		],

		series: [
			{
				name: '组合',
				data: y1Data,
				type: 'bar',
				itemStyle: {
					normal: {
						color: '#b6c2ff',
					},
				},
				xAxisIndex: 0,
				yAxisIndex: 0,
			},
			{
				name: '基准',
				data: y2Data,
				type: 'bar',
				itemStyle: {
					normal: {
						color: '#28bf7e',
					},
				},
				xAxisIndex: 0,
				yAxisIndex: 0,
			},
			{
				name: '组合相对于基准',
				data: y3Data,
				type: 'bar',
				itemStyle: {
					normal: {
						color: '#02bdff',
					},
				},
				xAxisIndex: 0,
				yAxisIndex: 0,
			},
			{
				data: [],
				type: 'bar',
				xAxisIndex: 1,
				yAxisIndex: 1,
			},
			{
				data: [],
				type: 'bar',
				xAxisIndex: 2,
				yAxisIndex: 2,
			},
			{
				data: [],
				type: 'bar',
				xAxisIndex: 3,
				yAxisIndex: 3,
			},
		],
	}
}
export const risk_prediction = (xData, yData, top, low) => {
	return {
		color: ['blue', 'red', 'darkred'],
		legend: {
			right: 80,
			data: ['收益率', '上限', '下限'],
			selectedMode: false,
		},
		xAxis: {
			data: xData,
			boundaryGap: false,
		},
		yAxis: {
			type: 'value',
		},
		dataZoom: {
			show: true,
			start: 0,
			end: 100,
		},

		tooltip: {
			trigger: 'axis',
			bordeRadius: 4,
			borderWidth: 1,
			borderColor: '#333',
			backgroundColor: 'rgba(255,255,255,0.9)',
			textStyle: {
				fontSize: 12,
				color: '#333',
			},
			formatter: function(params) {
				if (params.length === 0) {
					return false
				} else {
					let name = `<div style='text-align:left;margin-bottom:10px'>${params[0].axisValue}</div>`
					let str = ''
					if (params.length > 2) {
						if (params[0].value) {
							str += `${params[0].marker}<span>${params[0].seriesName}:  ${params[0].value}%</span><br/>`
						}
						if (params[1].value) {
							str += `${
								params[1].marker
							}<span>${'上下限'}: <span style="font-size:16px">±</span>  ${
								params[1].value
							}%</span>`
						}
					} else {
						str += `${
							params[0].marker
						}<span>${'上下限'}: <span style="font-size:16px">±</span> ${
							params[0].value
						}%</span>`
					}

					return name + str
				}
			},
		},

		toolbox: {
			orient: 'horizontal',
			feature: {
				restore: {
					title: '还原',
				},
			},
			itemSize: 18,
			iconStyle: {
				textAlign: 'rght',
			},
		},
		grid: {
			left: 50,
			right: 50,
			height: 350,
		},
		series: [
			{
				name: '收益率',
				data: yData,
				type: 'line',
				lineStyle: {
					color: 'blue',
				},
			},
			{
				name: '上限',
				data: top,
				type: 'line',
				lineStyle: {
					color: 'red',
					type: 'dotted',
				},
			},
			{
				name: '下限',
				data: low,
				type: 'line',
				lineStyle: {
					color: 'darkred',
					type: 'dotted',
				},
			},
		],
	}
}
