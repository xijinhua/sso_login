import moment from 'moment'

/**
 * 去掉of,sh,sz
 * @param {000001.OF} value
 */
const delete_of = (value) => {
	if (value && value.indexOf('.') !== -1) {
		return value.substring(0, value.indexOf('.'))
	}
	return value
}
const getValue = (v, n = 2) => {
	if (v === '-' || v === undefined || isNaN(v) || v === null) {
		return '-'
	} else {
		return getFloat(v, n) + '%'
	}
}
const getFloat = (number, n = 2, decimal = true) => {
	if (isNaN(number)) {
		return '-'
	}
	n = n ? parseInt(n) : 0
	if (n <= 0) return Math.round(number)
	number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n)
	if (decimal) {
		number = toDecimal(number, n)
	}
	return number
}
/**
 * 小数补0位
 * @param {数值} x
 * @param {保留位数} n
 */
const toDecimal = (x, n) => {
	var f = parseFloat(x)
	if (isNaN(f)) {
		return false
	}
	// var f = Math.round(x*100)/100;
	var s = f.toString()
	var rs = s.indexOf('.')
	if (rs < 0) {
		rs = s.length
		s += '.'
	}
	while (s.length <= rs + n) {
		s += '0'
	}
	return s
}
/**
 * 判断是不是数字
 * val: 数值
 * multiple:倍数
 * bool 判断返回值是boolean类型还是数字
 */
function isNumber(val, multiple = 1, bool = false) {
	var regPos = /^\d+(\.\d+)?$/ //非负浮点数
	var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/ //负浮点数
	if (regPos.test(val) || regNeg.test(val)) {
		return bool ? true : val * multiple
	} else {
		return bool ? false : '-'
	}
}
/**
 *
 * @param {时间} date
 * @param {规则} f  'YYYY-MM-DD HH:mm:ss'
 */
const format_date = (date, f) => {
	if (date) {
		date = moment(date).format(f)
	}
	return date
}
/**
 * 转换千分位
 * @param {num} 数字
 */
const toThousandsNoZero = (num) => {
	if (isNaN(parseFloat(num)) || num === 0) {
		return 0.0
	}
	return num
		? (isNaN(parseFloat(num.toString().replace(/,/g, '')))
				? 1
				: parseFloat(num.toString().replace(/,/g, ''))
		  )
				.toFixed(2)
				.toString()
				.replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
					return $1 + ','
				})
		: ''
}
/**
 * 转换单位
 * @param {num} 数字
 */
const billion = (v) => {
	if (isNumber(v)) {
		if (v >= 100000000) {
			return getFloat(v / 100000000) + '亿'
		} else if (v >= 100) {
			return getFloat(v / 10000) + '万'
		} else {
			return getFloat(v)
		}
	} else {
		return '--'
	}
}
export {
	delete_of,
	getValue,
	getFloat,
	toDecimal,
	isNumber,
	format_date,
	toThousandsNoZero,
	billion,
}
