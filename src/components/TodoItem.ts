export default class TodoItem {
  name: string;

  description?: string;

  timestamp: Date;

  constructor(name: string, description?: string) {
    this.name = name;
    this.description = description;
    this.timestamp = new Date();
  }
}
