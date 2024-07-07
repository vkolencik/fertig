import { Checklist } from './Checklist'

const checklistsKey = 'checklists'

const getStoredChecklistData: () => { [key: string]: Checklist } | null = () => {
  const storedChecklists = localStorage.getItem(checklistsKey)
  const checklistsData: { [key: string]: Checklist } | null = storedChecklists !== null ? JSON.parse(storedChecklists) : null

// TODO: handle schema mismatch
  return checklistsData
} 

export function getChecklist (checklistId: string): Checklist | null {
  const storedChecklists = getStoredChecklistData()
  if (storedChecklists === null) {
    return null
  }

  return storedChecklists[checklistId] ?? null
}

export const getChecklists: () => Checklist[] = () => {
  const storedChecklists = getStoredChecklistData()
  if (storedChecklists == null) {
    return []
  } else {
    return Object.values(storedChecklists)
  }
}

export const saveChecklist: (checklist: Checklist) => void = (checklist: Checklist) => {
  const storedChecklists = getStoredChecklistData()
  
  const newChecklistsData = { ...storedChecklists, [checklist.id]: checklist }
  localStorage.setItem(checklistsKey, JSON.stringify(newChecklistsData))
}