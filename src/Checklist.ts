export interface Task { 
  description: string
}

export interface Checklist {
  id: string
  name: string
  description: string
  tasks: Array<Task>
}