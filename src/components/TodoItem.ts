export default class TodoItem {
  name: string;

  description?: string;

  timestamp: Date;

  completed: boolean;

  constructor(name: string, description?: string) {
    this.name = name;
    this.description = description;
    this.timestamp = new Date();
    this.completed = false;
  }
}
