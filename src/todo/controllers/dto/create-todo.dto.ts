export class CreateTodoDto {
  _id?: string;
  name: string;
  description: string;
  status?: 'NEW' | 'IN_PROGRESS' | 'DONE' | 'DELETE';
}
