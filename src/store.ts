import Vue from "vue";
import Vuex from "vuex";
import { plugin, Module } from "vuex-dry";

Vue.use(Vuex);

const todo  = Module.build({
  state() {
    return {
      todos: {}
    }
  },
  actions: {
    removeTodo({state}, id) {
      // const index = state.list.findIndex((x: any) => x.id == id);
      // state.list.splice(index, 1);
      state.todos[id] = undefined;
    }
  }
})

export default new Vuex.Store({
  plugins: [ plugin ],
  modules: {
    todo
  }
});
