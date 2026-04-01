import { Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos = signal<Todo[]>([]);

  constructor() {
    this.loadTodos();
  }

  private loadTodos() {
    try {
      const saved = localStorage.getItem('angular-todo-list');
      if (saved) {
        this.todos.set(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load todos from local storage');
    }
  }

  private saveTodos() {
    localStorage.setItem('angular-todo-list', JSON.stringify(this.todos()));
  }

  getTodos() {
    return this.todos;
  }

  addTodo(title: string) {
    if (!title || !title.trim()) return;
    
    const newTodo: Todo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    this.todos.update((current) => [newTodo, ...current]);
    this.saveTodos();
  }

  deleteTodo(id: number) {
    this.todos.update((current) => current.filter((todo) => todo.id !== id));
    this.saveTodos();
  }

  toggleTodo(id: number) {
    this.todos.update((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    this.saveTodos();
  }
}
