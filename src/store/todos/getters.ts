import { GetterTree } from "vuex";
import { Todos } from "@/entity/todo";
import { RootState } from "@/entity/rootState";

const getters: GetterTree<Todos, RootState> = {
  size: todos => {
    return todos.length;
  }
};

export default getters;
