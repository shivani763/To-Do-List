import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../service/todo';

@Component({
  selector: 'app-to-do-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-component.html',
  styleUrl: './to-do-component.css',
})
export class ToDoComponent {
  private todoService = inject(TodoService);
  todos = this.todoService.getTodos();
  
  newTaskTitle = '';
  filter = signal<'all' | 'active' | 'completed'>('all');

  filteredTodos = computed(() => {
    const list = this.todos();
    const currentFilter = this.filter();
    if (currentFilter === 'active') return list.filter(t => !t.completed);
    if (currentFilter === 'completed') return list.filter(t => t.completed);
    return list;
  });

  stats = computed(() => {
    const list = this.todos();
    const total = list.length;
    const completed = list.filter(t => t.completed).length;
    return {
      total,
      completed,
      active: total - completed
    };
  });

  addTodo() {
    if (this.newTaskTitle.trim()) {
      this.todoService.addTodo(this.newTaskTitle);
      this.newTaskTitle = '';
    }
  }

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  setFilter(filter: 'all' | 'active' | 'completed') {
    this.filter.set(filter);
  }
}
