export class Todo {
  // Voy a crear un metodo statico para poder recuperar los metodos de mi instancia de la clase, ya que en el local storage, no se puede guardar
  // una instancia de una clase, sino que se guarda un objeto con todos los atributos de la clase. Por ende, al yo recibir este objeto,
  // tengo que crear una instancia de la clase y asignarle los atributos que me interesan.
  static fromJSON({ id, tarea, completado, creado }) {
    const tempTodo = new Todo(tarea);
    tempTodo.id = id;
    tempTodo.tarea = tarea;
    tempTodo.completado = completado;
    tempTodo.creado = creado;
    return tempTodo;
  }

  constructor(tarea) {
    this.tarea = tarea;
    this.id = new Date().getTime();
    this.completado = false;
    this.creado = new Date();
  }
  imprimirClase() {
    console.log(this.tarea, this.id, this.completado, this.creado);
  }
}
