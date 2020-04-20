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
        if (this.priority === 'high') {
          this.priority = true
        } else {
          this.priority = false
        }
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
