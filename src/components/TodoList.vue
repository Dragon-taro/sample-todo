<template>
  <ul>
    <li v-for="todo in todos" v-bind:key="todo.id">
      <h2>{{ todo.title }}</h2>
      <p>{{ todo.content }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Todos } from "@/entity/todo";
import { State, Mutation } from "vuex-class";

@Component
export default class TodoList extends Vue {
  get todos(): Todos {
    return this.$store.state.todos;
  }
}
</script>
