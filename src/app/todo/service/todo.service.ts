import {  Injectable, inject } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from 'src/app/services/logger.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TodoApi {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private http = inject(HttpClient);
  constructor(private logger: LoggerService) {}

  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return this.todos;
  }

  /**
   * Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if(index > -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Logger la liste des todos
   */
  logTodos() {
    this.logger.logger(this.todos);
  }

  getTodoFromApi(): Observable<TodoApi[]> {
    this.http.get<TodoApi[]>('https://jsonplaceholder.typicode.com/todos').subscribe(
      (todos) => console.log({todos})
    );
    return this.http.get<TodoApi[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
