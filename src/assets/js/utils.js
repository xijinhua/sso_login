import { getFloat } from './filters'
/**
 * 分页数据分组,返回一个二维数组
 * @param {所有数据} array
 * @param {每页的长度} subGroupLength
 *
 */
const group = (array, subGroupLength) => {
	let index = 0
	let newArray = []
	while (index < array.length) {
		newArray.push(array.slice(index, (index += subGroupLength)))
	}
	return newArray
}
/**
 * 判断对象是否为空
 * @param {obj} data
 */
const is_obj = (data) => {
	return Object.keys(data).length > 0
}
/**
 * 数组去重
 * @param {数组} arr
 */
const arrRemoveRepeat = (arr) => {
	return Array.from(new Set(arr))
}
/**
 * 数组排序
 * @param {Array} arr  数组
 * @param {Boolean} ascendFlag   升序,默认为 true
 */
const arrOrderAscend = (arr, ascendFlag = true) => {
	return arr.sort((a, b) => {
		return ascendFlag ? a - b : b - a
	})
}
/**
 * 千分位转正整数
 * @param {num} 数字
 */
const toNumber = (num) => {
	return num.replace(/[^0-9]/g, '')
}
const add_sum_1 = (tickerArr) => {
	let sum = 0
	let a_sum = 0
	tickerArr.forEach((v) => {
		v.weight = parseFloat(v.weight, 2)
		a_sum += v.weight
	})
	tickerArr.forEach((v) => {
		v.weight = getFloat((100 * v.weight) / a_sum, 2, false)
		sum += v.weight
	})
	sum = getFloat(sum, 2)
	if (sum != 100) {
		if (sum > 100) {
			let c = sum - 100
			for (let i = 0; i < tickerArr.length; i++) {
				let weight = tickerArr[i].weight
				if (weight > c) {
					tickerArr[i].weight = getFloat(weight - c, 2, false)
					break
				}
			}
		} else {
			let c = tickerArr[tickerArr.length - 1].weight
			tickerArr[tickerArr.length - 1].weight = getFloat(
				100 - sum + c,
				2,
				false
			)
		}
	}
	return tickerArr
}
const clearNoNum = (value) => {
	value = value.replace(/[^\d.]/g, '') //清除“数字”和“.”以外的字符
	value = value.replace(/^\./g, '') //验证第一个字符是数字而不是.
	value = value.replace(/\.{2,}/g, '.') //只保留第一个. 清除多余的.
	value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
	value = value
		.replace('.', '$#$')
		.replace(/\./g, '')
		.replace('$#$', '.')
	return value
}
export default {
	group,
	is_obj,
	arrRemoveRepeat,
	arrOrderAscend,
	toNumber,
	add_sum_1,
	clearNoNum,
}
