import { MutationTree } from "vuex";
import { Todo } from "@/entity/todo";

const mutations: MutationTree<Todo> = {
  changeTitle: (state, title: string) => {
    state.title = title;
  },

  changeContent: (state, content: string) => {
    state.content = content;
  }
};

export default mutations;
