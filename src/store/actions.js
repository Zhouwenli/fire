// 将所有的actions单独管理
export default {
	actions: {//action 可以处理同步，异步方法
		'UPDATE_ADDRESS' (context,addressInfo) {//通过大写，当作常量理解，不可变
			console.log('action触发',addressInfo)
			context.commit('UPDATE_ADDRESS',addressInfo)
		},
		'SAVE_ADDRESS' (context,addressList) {//通过大写，当作常量理解，不可变
			console.log('action触发新增地址',addressList)
			context.commit('SAVE_ADDRESS',addressList)
		}
	}
}