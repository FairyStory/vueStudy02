export default {
    setProductListAction(context){
        context.dispatch('setProductListActionAsync').then(()=>{// Action 通过 store.dispatch 方法触发：
          context.commit('SET_PRODUCTLISTACTION')
        }) 
    },
    setProductListActionAsync({commit}){
      console.log("setProductListAsync执行了")
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('SET_PRODUCTLIST')//调用的mutation与mutation_type中相同
          resolve()
        }, 1000)
      })
    } 
}

//action与mutation相比的特色
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作 主要是它支持异步
