const TodoApp = require('./index');

describe('TodoApp', () => {
  let app;

  beforeEach(() => {
    app = new TodoApp();
  });

  test('should add a todo', () => {
    app.addTodo('Share the GitHub repository link');
    expect(app.todos.length).toBe(1);
    expect(app.todos[0].task).toBe('Share the GitHub repository link');
  });

  test('should complete a todo', () => {
    app.addTodo('Share the GitHub repository link');
    app.completeTodo(0);
    expect(app.todos[0].completed).toBe(true);
  });

  test('should return pending todos', () => {
    app.addTodo('Share the GitHub repository link');
    app.addTodo('Share a screenshot of the SonarQube report dashboard');
    app.completeTodo(0);
    const pending = app.getPendingTodos();
    expect(pending.length).toBe(1);
    expect(pending[0].task).toBe('Share a screenshot of the SonarQube report dashboard');
  });
});
