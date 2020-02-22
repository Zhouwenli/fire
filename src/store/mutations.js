// 将所有的mutations单独管理
export default {
	mutations: {//mutation 只能处理同步方法
		'UPDATE_ADDRESS' (state,addressInfo) {//通过大写，当作常量理解，不可变
			console.log('mutation触发',addressInfo)
			state.addressObj = {...addressInfo}
		},
		'SAVE_ADDRESS' (state,addressList) {
			console.log('mutation触发新增地址',addressList)
			state.addressList = [...addressList]
		}
	}
}