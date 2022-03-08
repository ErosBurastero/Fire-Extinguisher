import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

export const store = new vuex.Store({
    state: {
        tasks: [],
        task: null

    },

    mutations: {
        addTask(state) {
            state.tasks = [state.amigo, ...state.tasks]
        }
    },

    actions: {
        addTaskAction(context) {
            context.commit('addAmigo');
        }
    },

    getters: {

    }
})