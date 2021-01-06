const HEADER = {
	headers: { 'Content-Type': 'multipart/form-data' }, //表单提交
}
export default {
	//组合列表
	portfolio_list: {
		method: 'get',
		url: '/api/v1/portfolio_info/list',
		config: {},
	},
	//新建组合
	add_portfolio: {
		method: 'post',
		url: '/api/v1/portfolio_info',
		config: HEADER,
	},
	//修改组合
	edit_portfolio: {
		method: 'put',
		url: '/api/v1/portfolio_info',
		config: HEADER,
	},
	//删除组合
	delete_portfolio: {
		method: 'delete',
		url: '/api/v1/portfolio_info',
		config: {},
	},
	//查看组合
	query_portfolio: {
		method: 'get',
		url: '/api/v1/portfolio_info',
		config: {},
	},
	//指数list
	index_info: {
		method: 'get',
		url: '/api/v1/search/index_info',
		config: {},
	},
	//股票list
	stock_info: {
		method: 'get',
		url: '/api/v1/search/stock_info',
		config: {},
	},
	//风险分析
	risk_analysis: {
		method: 'get',
		url: '/api/v1/risk_analysis',
		config: {},
	},
	//组合预测和收益
	portfolio_ret: {
		method: 'get',
		url: '/api/v1/portfolio_ret',
		config: {},
	},
	//分标的查看因子
	portfolio_stock: {
		method: 'get',
		url: '/api/v1/search/portfolio_stock',
		config: {},
	},
}
