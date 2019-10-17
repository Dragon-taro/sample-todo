import Vue from "vue";
import Vuex from "vuex";
import todo from "./todo";
import todos from "./todos";
import { RootState } from "@/entity/rootState";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    todo,
    todos
  }
});
