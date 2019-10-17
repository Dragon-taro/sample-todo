import { Todos } from "@/entity/todo";
import { Module } from "vuex";
import { RootState } from "@/entity/rootState";
import mutations from "./mutations";

const initState: Todos = [];

const todos: Module<Todos, RootState> = {
  namespaced: true,
  state: initState,
  mutations
};

export default todos;
