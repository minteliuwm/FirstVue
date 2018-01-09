<template>
  <div id="todo-list-example">
    <input
      v-model="newTodoText"
      v-on:keyup.enter="addNewTodo"
      placeholder="Add a todo">
    <ul>
      <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:content="todo.content"
        v-on:remove="todos.splice(index, 1)"
      ></li>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "todolist",
  components: {
    "todo-item": TodoItem
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          content: "task1"
        },
        {
          id: 2,
          content: "task2"
        },
        {
          id: 3,
          content: "task3"
        }
      ],
      newTodoText: "",
      nextTodoId: 4
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        content: this.newTodoText
      });
      this.newTodoText = "";
    }
  },
  created() {
    debugger;
  },
  mounted() {
    debugger;
  }
};
</script>
