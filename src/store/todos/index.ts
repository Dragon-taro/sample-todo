import { Todos } from "@/entity/todo";
import { Module } from "vuex";
import { RootState } from "@/entity/rootState";
import mutations from "./mutations";
import getters from "./getters";

const initState: Todos = [];

const todos: Module<Todos, RootState> = {
  namespaced: true,
  state: initState,
  mutations,
  getters
};

export default todos;
