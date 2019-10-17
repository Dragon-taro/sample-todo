<template>
  <div class="home">
    <single-todo />
  </div>
</template>

<script>
// @ is an alias to /src
import SingleTodo from "@/components/SingleTodo.vue";

export default {
  name: "home",
  components: {
    SingleTodo
  }
};
</script>
