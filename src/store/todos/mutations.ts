import { MutationTree } from "vuex";
import { Todos, Todo } from "@/entity/todo";

const mutations: MutationTree<Todos> = {
  addTodo: (state, todo: Todo) => {
    state.push(todo);
  }
};

export default mutations;
