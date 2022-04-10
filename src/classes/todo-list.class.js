import { Todo } from "../classes/todo.class";

export class TodoList {
  constructor() {
    //this.todos = []; Esto lo comento porque ya no es necesario, ya que en el Metodo cargarLocalStorage() ya se carga el
    //array vacio si es que no existe el localStorage
    this.cargarLocalStorage();
  }
  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
  }
  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.guardarLocalStorage();
  }
  marcarCompletado(id) {
    for (const todo of this.todos) {
      console.log(id, todo.id);
      if (todo.id == id) {
        todo.completado = !todo.completado;
        console.log(todo);
        this.guardarLocalStorage();
        break;
      }
    }
  }
  eliminarCompletados(id) {
    this.todos = this.todos.filter((todo) => !todo.completado);
  }
  guardarLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }
  cargarLocalStorage() {
    this.todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    this.todos = this.todos.map(Todo.fromJSON); //Todo va con mayusculas porque es un metodo estatico
  }
}
