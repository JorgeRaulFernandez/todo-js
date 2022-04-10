import "./styles.css";
// import { Todo } from "./classes/todo.class.js";
// import { TodoList } from "./classes/todo-list.class.js";

//Este import es para que no tener que estar importando uno por una los archivos de clases

import { Todo, TodoList } from "./classes"; //No es necesario que ponga /index.js, ya que si no especifico nada, busca el index por defecto
import { crearTodoHTML } from "./js/componentes";

export const todoList = new TodoList();
todoList.todos.forEach((todo) => crearTodoHTML(todo));

//Esto lo puedo escribir tambien asi: todoList.todos.forEach(crearTodoHTML); ,ya que el argumento de la funcion es el mismo que el de la variable.
//Esto no me sirve si por ejemplo quiero que el argumento sea otro nombre, por ejemplo crearTodoHTML(todo, id)

//const tarea1 = new Todo("Actualizar Power BI");

// todoList.nuevoTodo(tarea1);

// console.log(tarea1);

// tarea1.completado = true;

// crearTodoHTML(tarea1);

// console.log(todoList);

todoList.todos[0].imprimirClase();
