import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      todos: [],
      newToDo: "",
      priority: ""
    },
    methods: {
      saveNewToDo: function() {
        const toDoToAdd = {
          name: this.newToDo,
          priority: this.priority
        }
        this.todos.push(toDoToAdd);
        this.newToDo = ""
      }
    },
  });

});
