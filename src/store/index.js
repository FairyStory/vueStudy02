import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import actions from './action.js'
import mutations from './mutation.js'
import module1 from './module/module1.js'

Vue.use(Vuex) //全局注册Vuex


export default new Vuex.Store({
    modules:{
        module1,  
    },
    state,
    mutations,
    actions,
    getters:{

    }
})

// mapState 帮助生成计算属性
// mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
// mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）
// mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：


// 关于热重载 module不知道指谁  
//Vuex 支持在开发过程中热重载 mutation、module、action 和 getter
// if (module.hot) {
//     // 使 action 和 mutation 成为可热重载模块
//     module.hot.accept(['./mutation', './module/module1'], () => {
//       // 获取更新后的模块
//       // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
//       const newMutations = require('./mutation').default
//       const newModuleA = require('./module/module1').default
//       // 加载新模块
//       store.hotUpdate({
//         mutations: newMutations,
//         modules: {
//           a: newModuleA
//         }
//       })
//     })
//   }
