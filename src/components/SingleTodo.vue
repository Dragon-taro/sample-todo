<template>
  <div v-if="todo">
    <h2>{{ todo.title }}</h2>
    <p>{{ todo.content }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Todo } from "@/entity/todo";
import { State, Mutation } from "vuex-class";

@Component
export default class SingleTodo extends Vue {
  get todo(): Todo {
    const id = Number(this.$route.params.id) - 1;
    return this.$store.state.todos[id];
  }
}
</script>
