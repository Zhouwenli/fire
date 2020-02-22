export default {
    state: {
        count: 0
    },
    mutations: {
      Count (state,n) {
        state.count = state.count+n
      }
    },
    actions: {
      Acount (context,i) {
        console.log(context)
        context.commit('Count',i)
      }
    }
}
