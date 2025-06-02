class TodoApp {
  constructor() {
    this.todos = [];
  }

  addTodo(task) {
    if (!task) throw new Error('Task cannot be empty');
    this.todos.push({ task, completed: false });
  }

  completeTodo(index) {
    if (index < 0 || index >= this.todos.length) throw new Error('Invalid index');
    this.todos[index].completed = true;
  }

  getPendingTodos() {
    return this.todos.filter(todo => !todo.completed);
  }

  getCompletedTodos() {
    return this.todos.filter(todo => todo.completed);
  }
}

module.exports = TodoApp;