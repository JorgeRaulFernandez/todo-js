import { Todo } from "../classes/todo.class.js";
import { todoList } from "../index.js";

//Referencias en el HTML

// const bodyDocument = document.querySelector("body"); Lo hice para saber que tipo de elemento es lo que hago click en el body
const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo"); //El querySelector busca el primer elemento que encuentre con ese selector. Lleva ".new-todo"
// porque es el selector de la clase
const btnBorrar = document.querySelector(".clear-completed");
const ulFiltros = document.querySelector(".filters"); //Voy a agregar el querySelector para filters en general, ya que le pondre un event listerner
//a toda la clase, y no a los elementos que tenga esa clase, ya que serian mas.
const anchorFiltros = document.querySelectorAll(".filtro"); //Voy a agregar el querySelectorAll para los filtros, ya que le pondre un event
//listerner a todos

export const crearTodoHTML = (todo) => {
  const htmlTodo = `
    <li class="${todo.completado ? "completed" : ""} "data-id=${todo.id}>
        <div class="view">
            <input class="toggle" type="checkbox" ${
              todo.completado ? "checked" : ""
            }>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
            </li>`;
  const div = document.createElement("div");
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);
  return div.firstElementChild;
};

//Eventos

//El key code del enter es 13

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    const nuevoTodo = new Todo(txtInput.value);
    todoList.nuevoTodo(nuevoTodo);
    console.log(todoList.todos);
    crearTodoHTML(nuevoTodo);
    txtInput.value = "";
  }
});

divTodoList.addEventListener("click", (event) => {
  const nombreElemento = event.target.localName;
  const todoElemento = event.target.parentElement.parentElement;
  const todoId = todoElemento.getAttribute("data-id");

  //console.log(nombreElemento, todoElemento, typeof todoId); //Notar que el getAttribute devuelve un string, por lo que hay que convertirlo
  //a numero con parseInt

  //Ahora voy a plantear un condicional. Si el nombre del elemento includes "input" (lo que significaria que se hizo click en el input),
  // voy a marcar como completado el todo.

  if (nombreElemento.includes("input")) {
    todoList.marcarCompletado(todoId);
    todoElemento.classList.toggle("completed");
  } else if (nombreElemento.includes("button")) {
    todoList.eliminarTodo(todoId);
    divTodoList.removeChild(todoElemento);
  }
  console.log("mi lista", todoList.todos);
});

btnBorrar.addEventListener("click", () => {
  //no es necesario que reciba un evento, porque no se va a usar. Cuando se haga click en el boton,
  // se va a ejecutar la funcion
  todoList.eliminarCompletados();
  // Y ahora voy a recorrer todos los todos y voy a eliminar los que esten completados, es decir, los que tienen la clase completado.
  // Solo debo tener en cuenta que debo hacer esto de abajo hacia arriba, ya que si voy de arriba hacia abajo, el indice va a ir cambiando
  // y no va a ser el mismo, por lo que prodría saltearse elementos.

  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    //Recorro los elementos del divTodoList, empezando por el ultimo elemento.
    //Por ejemplo, si solo tengo un elemento, el indice va a ser 0, y si tengo dos elementos, el indice va a ser 1. Por eso, resto ese uno.
    const elemento = divTodoList.children[i];
    if (elemento.classList.contains("completed")) {
      divTodoList.removeChild(elemento);

      //classlist me sirve para recuperar la clase que tiene un elemento. Y con el metodo contains, me dice si una clase
      //esta incluida en el elemento, en este caso, la clase completed.
    }
  }
});
// bodyDocument.addEventListener("click", (event) => {
//   const nombreElemento = event.target;
//   console.log(nombreElemento);
// }); //Esto es para ver que elemento se hizo click en el body.

// ulFiltros.addEventListener("click", (event) => {
//   console.log(event.target.text);
// });

// Esto me servira para que cuando haga click en un elemento de la lista de filtros, me muestre el texto que tiene ese elemento, y asi
// descubierto que es lo que sucede si clickeo en el medio, entre de los botones.;

ulFiltros.addEventListener("click", (event) => {
  const filtro = event.target.text;
  if (!filtro) {
    return;
  }
  anchorFiltros.forEach((elemento) => elemento.classList.remove("selected"));
  event.target.classList.add("selected");
  for (const elemento of divTodoList.children) {
    //    console.log(elemento); Esto me va a mostrar todos los elementos que hay en el divTodoList, y me da un indicio de como puedo
    //    hacer el filtrado. La idea es trabajar con una clase que tenemos en el css que se llama hidden, permitiendome que un elemento
    //    se muestre o no se muestre.
    elemento.classList.remove("hidden"); //Esto me va a remover la clase hidden, por lo que el elemento va a aparecer.
    const completado = elemento.classList.contains("completed"); //Esto me va a devolver un booleano, si el elemento tiene la clase completed.
    switch (filtro) {
      case "Pendientes":
        if (completado) {
          elemento.classList.add("hidden"); //Esto me va a agregar la clase hidden, por lo que el elemento va a desaparecer.
        }
        break; //Esto es para que no se ejecute el case que sigue.
      case "Completados":
        if (!completado) {
          elemento.classList.add("hidden");
        }
        break;
    }
    //Si hago click en Todos, no va a entrar en ningun case, y como yo afuera del case le digo que remueva la clase hidden de todos
    //los elementos, por defecto se van a mostar todos.
  }
});
