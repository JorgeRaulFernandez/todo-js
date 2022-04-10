/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-instalation/./src/styles.css?");

/***/ }),

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* reexport safe */ _todo_class_js__WEBPACK_IMPORTED_MODULE_0__.Todo),\n/* harmony export */   \"TodoList\": () => (/* reexport safe */ _todo_list_class_js__WEBPACK_IMPORTED_MODULE_1__.TodoList)\n/* harmony export */ });\n/* harmony import */ var _todo_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class.js */ \"./src/classes/todo.class.js\");\n/* harmony import */ var _todo_list_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.class.js */ \"./src/classes/todo-list.class.js\");\n//Este archivo me sirve para no tener tantas lineas de importacion de clases, ya que importaré unicamente este, que será el index//\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-instalation/./src/classes/index.js?");

/***/ }),

/***/ "./src/classes/todo-list.class.js":
/*!****************************************!*\
  !*** ./src/classes/todo-list.class.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _classes_todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/todo.class */ \"./src/classes/todo.class.js\");\n\r\n\r\nclass TodoList {\r\n  constructor() {\r\n    //this.todos = []; Esto lo comento porque ya no es necesario, ya que en el Metodo cargarLocalStorage() ya se carga el\r\n    //array vacio si es que no existe el localStorage\r\n    this.cargarLocalStorage();\r\n  }\r\n  nuevoTodo(todo) {\r\n    this.todos.push(todo);\r\n    this.guardarLocalStorage();\r\n  }\r\n  eliminarTodo(id) {\r\n    this.todos = this.todos.filter((todo) => todo.id != id);\r\n    this.guardarLocalStorage();\r\n  }\r\n  marcarCompletado(id) {\r\n    for (const todo of this.todos) {\r\n      console.log(id, todo.id);\r\n      if (todo.id == id) {\r\n        todo.completado = !todo.completado;\r\n        console.log(todo);\r\n        this.guardarLocalStorage();\r\n        break;\r\n      }\r\n    }\r\n  }\r\n  eliminarCompletados(id) {\r\n    this.todos = this.todos.filter((todo) => !todo.completado);\r\n  }\r\n  guardarLocalStorage() {\r\n    localStorage.setItem(\"todo\", JSON.stringify(this.todos));\r\n  }\r\n  cargarLocalStorage() {\r\n    this.todos = localStorage.getItem(\"todo\")\r\n      ? JSON.parse(localStorage.getItem(\"todo\"))\r\n      : [];\r\n    this.todos = this.todos.map(_classes_todo_class__WEBPACK_IMPORTED_MODULE_0__.Todo.fromJSON); //Todo va con mayusculas porque es un metodo estatico\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack-instalation/./src/classes/todo-list.class.js?");

/***/ }),

/***/ "./src/classes/todo.class.js":
/*!***********************************!*\
  !*** ./src/classes/todo.class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\r\n  // Voy a crear un metodo statico para poder recuperar los metodos de mi instancia de la clase, ya que en el local storage, no se puede guardar\r\n  // una instancia de una clase, sino que se guarda un objeto con todos los atributos de la clase. Por ende, al yo recibir este objeto,\r\n  // tengo que crear una instancia de la clase y asignarle los atributos que me interesan.\r\n  static fromJSON({ id, tarea, completado, creado }) {\r\n    const tempTodo = new Todo(tarea);\r\n    tempTodo.id = id;\r\n    tempTodo.tarea = tarea;\r\n    tempTodo.completado = completado;\r\n    tempTodo.creado = creado;\r\n    return tempTodo;\r\n  }\r\n\r\n  constructor(tarea) {\r\n    this.tarea = tarea;\r\n    this.id = new Date().getTime();\r\n    this.completado = false;\r\n    this.creado = new Date();\r\n  }\r\n  imprimirClase() {\r\n    console.log(this.tarea, this.id, this.completado, this.creado);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack-instalation/./src/classes/todo.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n\n// import { Todo } from \"./classes/todo.class.js\";\n// import { TodoList } from \"./classes/todo-list.class.js\";\n\n//Este import es para que no tener que estar importando uno por una los archivos de clases\n\n //No es necesario que ponga /index.js, ya que si no especifico nada, busca el index por defecto\n\n\nconst todoList = new _classes__WEBPACK_IMPORTED_MODULE_1__.TodoList();\ntodoList.todos.forEach((todo) => (0,_js_componentes__WEBPACK_IMPORTED_MODULE_2__.crearTodoHTML)(todo));\n\n//Esto lo puedo escribir tambien asi: todoList.todos.forEach(crearTodoHTML); ,ya que el argumento de la funcion es el mismo que el de la variable.\n//Esto no me sirve si por ejemplo quiero que el argumento sea otro nombre, por ejemplo crearTodoHTML(todo, id)\n\n//const tarea1 = new Todo(\"Actualizar Power BI\");\n\n// todoList.nuevoTodo(tarea1);\n\n// console.log(tarea1);\n\n// tarea1.completado = true;\n\n// crearTodoHTML(tarea1);\n\n// console.log(todoList);\n\ntodoList.todos[0].imprimirClase();\n\n\n//# sourceURL=webpack://webpack-instalation/./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearTodoHTML\": () => (/* binding */ crearTodoHTML)\n/* harmony export */ });\n/* harmony import */ var _classes_todo_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/todo.class.js */ \"./src/classes/todo.class.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\n\n\n//Referencias en el HTML\n\n// const bodyDocument = document.querySelector(\"body\"); Lo hice para saber que tipo de elemento es lo que hago click en el body\nconst divTodoList = document.querySelector(\".todo-list\");\nconst txtInput = document.querySelector(\".new-todo\"); //El querySelector busca el primer elemento que encuentre con ese selector. Lleva \".new-todo\"\n// porque es el selector de la clase\nconst btnBorrar = document.querySelector(\".clear-completed\");\nconst ulFiltros = document.querySelector(\".filters\"); //Voy a agregar el querySelector para filters en general, ya que le pondre un event listerner\n//a toda la clase, y no a los elementos que tenga esa clase, ya que serian mas.\nconst anchorFiltros = document.querySelectorAll(\".filtro\"); //Voy a agregar el querySelectorAll para los filtros, ya que le pondre un event\n//listerner a todos\n\nconst crearTodoHTML = (todo) => {\n  const htmlTodo = `\n    <li class=\"${todo.completado ? \"completed\" : \"\"} \"data-id=${todo.id}>\n        <div class=\"view\">\n            <input class=\"toggle\" type=\"checkbox\" ${\n              todo.completado ? \"checked\" : \"\"\n            }>\n            <label>${todo.tarea}</label>\n            <button class=\"destroy\"></button>\n            </div>\n            <input class=\"edit\" value=\"Create a TodoMVC template\">\n            </li>`;\n  const div = document.createElement(\"div\");\n  div.innerHTML = htmlTodo;\n  divTodoList.append(div.firstElementChild);\n  return div.firstElementChild;\n};\n\n//Eventos\n\n//El key code del enter es 13\n\ntxtInput.addEventListener(\"keyup\", (event) => {\n  if (event.keyCode === 13 && txtInput.value.length > 0) {\n    const nuevoTodo = new _classes_todo_class_js__WEBPACK_IMPORTED_MODULE_0__.Todo(txtInput.value);\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.todoList.nuevoTodo(nuevoTodo);\n    console.log(_index_js__WEBPACK_IMPORTED_MODULE_1__.todoList.todos);\n    crearTodoHTML(nuevoTodo);\n    txtInput.value = \"\";\n  }\n});\n\ndivTodoList.addEventListener(\"click\", (event) => {\n  const nombreElemento = event.target.localName;\n  const todoElemento = event.target.parentElement.parentElement;\n  const todoId = todoElemento.getAttribute(\"data-id\");\n\n  //console.log(nombreElemento, todoElemento, typeof todoId); //Notar que el getAttribute devuelve un string, por lo que hay que convertirlo\n  //a numero con parseInt\n\n  //Ahora voy a plantear un condicional. Si el nombre del elemento includes \"input\" (lo que significaria que se hizo click en el input),\n  // voy a marcar como completado el todo.\n\n  if (nombreElemento.includes(\"input\")) {\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.todoList.marcarCompletado(todoId);\n    todoElemento.classList.toggle(\"completed\");\n  } else if (nombreElemento.includes(\"button\")) {\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarTodo(todoId);\n    divTodoList.removeChild(todoElemento);\n  }\n  console.log(\"mi lista\", _index_js__WEBPACK_IMPORTED_MODULE_1__.todoList.todos);\n});\n\nbtnBorrar.addEventListener(\"click\", () => {\n  //no es necesario que reciba un evento, porque no se va a usar. Cuando se haga click en el boton,\n  // se va a ejecutar la funcion\n  _index_js__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarCompletados();\n  // Y ahora voy a recorrer todos los todos y voy a eliminar los que esten completados, es decir, los que tienen la clase completado.\n  // Solo debo tener en cuenta que debo hacer esto de abajo hacia arriba, ya que si voy de arriba hacia abajo, el indice va a ir cambiando\n  // y no va a ser el mismo, por lo que prodría saltearse elementos.\n\n  for (let i = divTodoList.children.length - 1; i >= 0; i--) {\n    //Recorro los elementos del divTodoList, empezando por el ultimo elemento.\n    //Por ejemplo, si solo tengo un elemento, el indice va a ser 0, y si tengo dos elementos, el indice va a ser 1. Por eso, resto ese uno.\n    const elemento = divTodoList.children[i];\n    if (elemento.classList.contains(\"completed\")) {\n      divTodoList.removeChild(elemento);\n\n      //classlist me sirve para recuperar la clase que tiene un elemento. Y con el metodo contains, me dice si una clase\n      //esta incluida en el elemento, en este caso, la clase completed.\n    }\n  }\n});\n// bodyDocument.addEventListener(\"click\", (event) => {\n//   const nombreElemento = event.target;\n//   console.log(nombreElemento);\n// }); //Esto es para ver que elemento se hizo click en el body.\n\n// ulFiltros.addEventListener(\"click\", (event) => {\n//   console.log(event.target.text);\n// });\n\n// Esto me servira para que cuando haga click en un elemento de la lista de filtros, me muestre el texto que tiene ese elemento, y asi\n// descubierto que es lo que sucede si clickeo en el medio, entre de los botones.;\n\nulFiltros.addEventListener(\"click\", (event) => {\n  const filtro = event.target.text;\n  if (!filtro) {\n    return;\n  }\n  anchorFiltros.forEach((elemento) => elemento.classList.remove(\"selected\"));\n  event.target.classList.add(\"selected\");\n  for (const elemento of divTodoList.children) {\n    //    console.log(elemento); Esto me va a mostrar todos los elementos que hay en el divTodoList, y me da un indicio de como puedo\n    //    hacer el filtrado. La idea es trabajar con una clase que tenemos en el css que se llama hidden, permitiendome que un elemento\n    //    se muestre o no se muestre.\n    elemento.classList.remove(\"hidden\"); //Esto me va a remover la clase hidden, por lo que el elemento va a aparecer.\n    const completado = elemento.classList.contains(\"completed\"); //Esto me va a devolver un booleano, si el elemento tiene la clase completed.\n    switch (filtro) {\n      case \"Pendientes\":\n        if (completado) {\n          elemento.classList.add(\"hidden\"); //Esto me va a agregar la clase hidden, por lo que el elemento va a desaparecer.\n        }\n        break; //Esto es para que no se ejecute el case que sigue.\n      case \"Completados\":\n        if (!completado) {\n          elemento.classList.add(\"hidden\");\n        }\n        break;\n    }\n    //Si hago click en Todos, no va a entrar en ningun case, y como yo afuera del case le digo que remueva la clase hidden de todos\n    //los elementos, por defecto se van a mostar todos.\n  }\n});\n\n\n//# sourceURL=webpack://webpack-instalation/./src/js/componentes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;