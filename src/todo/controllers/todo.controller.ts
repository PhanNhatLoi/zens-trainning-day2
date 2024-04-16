import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { TodoService } from '../todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoWorksService: TodoService) {}

  @Get()
  async getList(): Promise<Todo[]> {
    return this.todoWorksService.findAll();
  }

  @Get(':id')
  getDetail(@Param() { id }: { id: string }) {
    return this.todoWorksService.detail(id) || 'not found';
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoWorksService.create(createTodoDto);
  }

  @Put(':id')
  update(@Param() { id }: { id: string }, @Body() body: CreateTodoDto) {
    return this.todoWorksService.update({ ...body, _id: id });
  }
  @Delete(':id')
  delete(@Param() { id }: { id: string }) {
    return this.todoWorksService.delete(id);
  }
}
