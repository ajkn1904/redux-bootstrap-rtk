export interface ITask {
  _id: string
  title: string
  description: string
  deuDate: string
  isCompleted: boolean
  priority: "High" | "Medium" | "Low",
  assignedTo?: string | null,
}
