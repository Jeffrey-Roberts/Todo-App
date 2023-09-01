export default class TodoItem {
  id: number;

  name: string;

  description?: string;

  timestamp: Date;

  completed: boolean;

  constructor(id: number, name: string, description?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.timestamp = new Date();
    this.completed = false;
  }
}
