import { Injectable, NotFoundException } from '@nestjs/common';

type Task = {
  title: string;
  status: boolean;
};

@Injectable()
export class TaskService {
  private tasks = [];

  getTask(id: number) {
    const taskFound = this.tasks.find((t) => t.id === id);
    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }
    return taskFound;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(task: Task) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask() {
    return 'Actualizando tarea';
  }

  updateStatusTask() {
    return 'Actualizando la tarea parcialmente';
  }

  deleteTask() {
    return 'Borrando tarea';
  }
}
