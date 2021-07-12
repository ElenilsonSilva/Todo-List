import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent{
  
  todos: string[] = []; 
   
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(texto: any){
    this.todos.push(texto.value);
    texto.value = ''
  }

  edit(index: number){
    let title = this.todos[index];
    let editado = prompt("Edite sua tarefa")
    if(editado !== null && editado !== ""){
      this.todos[index] = editado;
    }
  }

  removeItem(item: any){
    this.todos.splice(this.todos.indexOf(item), 1);
  }
}

