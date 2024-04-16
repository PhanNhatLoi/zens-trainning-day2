import { BadRequestException, Injectable } from '@nestjs/common';
import { Todo } from './controllers/interfaces/todo.interface';

@Injectable()
export class TodoService {
  private readonly todoWorks: Todo[] = [];

  create(work: Todo) {
    if (!work.name) {
      throw new BadRequestException('Name is required!');
    }
    this.todoWorks.push({
      _id: new Date(Date.now()).getTime().toString(),
      name: work.name,
      description: work.description || '',
      status: 'NEW',
    });
    return {
      message: 'add work success!',
      work: work,
    };
  }

  findAll(): Todo[] {
    return this.todoWorks.filter((f) => f.status !== 'DELETE');
  }

  detail(_id: string): Todo {
    return this.todoWorks.find((f) => f._id === _id);
  }

  update(body: Todo) {
    if (!body._id) {
      throw new BadRequestException('id is required!');
    }
    const index = this.todoWorks.findIndex((f) => f._id === body._id);
    if (index < 0) {
      throw new BadRequestException('work not round');
    }
    this.todoWorks[index] = {
      ...this.todoWorks[index],
      ...body,
    };
    return {
      message: 'Update work success',
    };
  }

  delete(_id: string) {
    if (!_id) {
      throw new BadRequestException('id is required!');
    }
    const index = this.todoWorks.findIndex((f) => f._id === _id);
    if (index < 0) {
      throw new BadRequestException('work not round');
    }
    this.todoWorks[index].status = 'DELETE';
    return {
      message: 'delete work success',
    };
  }
}
