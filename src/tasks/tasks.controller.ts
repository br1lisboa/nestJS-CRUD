import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('/tasks')
export class TasksController {
  taskService: TaskService;

  // Es una función que se ejecuta apenas la clase sea instanciada
  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    console.log(id);
    return this.taskService.getTask(Number(id));
  }

  @Get()
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() task: any) {
    return this.taskService.createTask(task);
  }

  @Put()
  updateTask() {
    return this.taskService.updateTask();
  }

  @Patch()
  updateStatusTask() {
    return this.taskService.updateStatusTask();
  }

  @Delete()
  deleteTask() {
    return this.taskService.deleteTask();
  }
}
