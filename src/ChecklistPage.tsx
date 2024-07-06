import { useEffect } from 'preact/hooks'
import { ChecklistView } from './ChecklistView'
import { DarkModeSwitch } from './DarkModeSwitch'
import React from 'react'
import { useRoute } from 'preact-iso'
import { getChecklist } from './GetChecklist'
import { setChecklistPending, unsetChecklistPending } from './unloadWatcher'

const ChecklistPage: React.FC = () => {
  const { checklistId } = useRoute().params
  const checklist = getChecklist(checklistId)

  if (checklist === null) {
    throw Error(`Checklist ${checklistId} not found`)
  }

  useEffect(() => { document.title = checklist.name }, [])
  useEffect(() => {
    setChecklistPending()
    return () => { unsetChecklistPending() }
  }, [])

  return (
    <div class="paper container">
      <ChecklistView checklistData={checklist}/>
      <DarkModeSwitch/>
    </div>
  )
}

export default ChecklistPage
