import { Checklist } from './Checklist'

const morningChecklist = {
  id: 'morning-checklist',
  name: 'Morning checklist',
  description: 'Good morning! 🌞',
  tasks: [
    { description: 'Check calendar schedule' },
    { description: 'Check MRs and deploys' },
    { description: 'Check board' },
    { description: 'Check personal tasks' },
    { description: 'Emergency scan Slack' },
    { description: 'Emergency scan email' },
    { description: 'Organize quick notes' }
  ]
}

const storedChecklists = localStorage.getItem('checklists')
const checklistsData: { [key: string]: Checklist } | null = storedChecklists !== null ? JSON.parse(storedChecklists) : null
// TODO: handle schema mismatch

export function getChecklist (checklistId: string): Checklist | null {
  if (checklistId === morningChecklist.id) {
    return morningChecklist
  }

  if (storedChecklists === null) {
    return null
  }

  return storedChecklists[checklistId] ?? null
}

export const getChecklists: () => Checklist[] = () => checklistsData == null ? [morningChecklist] : [...Object.values(checklistsData), morningChecklist]

export const saveChecklist: (checklist: Checklist) => void = (checklist: Checklist) => {
  const newChecklistsData = { ...checklistsData, [checklist.id]: checklist }
  localStorage.setItem('checklists', JSON.stringify(newChecklistsData))
}