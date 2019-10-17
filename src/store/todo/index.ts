import { Todo } from "@/entity/todo";
import { Module } from "vuex";
import { RootState } from "@/entity/rootState";
import mutations from "./mutations";

const initState: Todo = {
  title: ""
};

const todo: Module<Todo, RootState> = {
  namespaced: true,
  state: initState,
  mutations
};

export default todo;
