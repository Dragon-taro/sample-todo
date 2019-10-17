import { Todo, Todos } from "./todo";

export interface RootState {
  todos: Todos;
  todo: Todo;
}
