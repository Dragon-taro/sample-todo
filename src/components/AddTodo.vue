<template>
  <div>
    <div>
      <label for="title">
        タイトル
        <input id="title" type="text" @input="handleChangeTitle" :value="todo.title" />
      </label>
    </div>
    <div>
      <label for="content">
        コンテント
        <textarea id="content" @input="handleChangeContent" :value="todo.content" />
      </label>
    </div>
    <button @click="handleSubmit">追加</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Todo } from "@/entity/todo";
import { State, Mutation } from "vuex-class";

@Component
export default class AddTodo extends Vue {
  get todo(): Todo {
    return this.$store.state.todo;
  }

  private handleChangeTitle(e: any) {
    const value = e.target.value;

    // moduleの指定をせんとあかんらしい
    this.$store.commit("todo/changeTitle", value);
  }

  private handleChangeContent(e: any) {
    const value = e.target.value;
    // this.title = value;

    this.$store.commit("todo/changeContent", value);
  }

  private handleSubmit() {
    const todo = { ...this.todo };
    this.$store.commit("todos/addTodo", todo);
    this.$store.commit("todo/changeTitle", "");
    this.$store.commit("todo/changeContent", "");
  }
}
</script>
