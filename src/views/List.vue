<template>
  <div class="home">
    <AddTodo />
    <todo-list />
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from "@/components/AddTodo.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "home",
  components: {
    AddTodo,
    TodoList
  }
};
</script>
