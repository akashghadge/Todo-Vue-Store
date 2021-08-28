import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { mutations } from './mutations'
import { actions } from './actions'
export const store = new Vuex.Store({
    state: {
        todoList: [],
        quotes: []
    },
    mutations,
    actions
})

