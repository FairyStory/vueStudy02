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