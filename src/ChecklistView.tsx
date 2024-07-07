import React from 'react'
import { Checklist } from './GetChecklist'
import { useEffect, useState } from 'preact/hooks'
import { setChecklistPending, unsetChecklistPending } from './unloadWatcher'

export const ChecklistView: React.FC<{ checklistData: Checklist }> = ({ checklistData }) => {
  const [checked, setChecked] = useState<boolean[]>(checklistData.tasks.map(() => false))

  useEffect(() => {
    if (!checked.includes(false)) {
      unsetChecklistPending()
    } else {
      setChecklistPending()
    }
  }, checked)

  const handleCheckboxClick: (i: number) => void = (i: number) => {
    setChecked(prevState => {
      const copy = [...prevState]
      copy[i] = !copy[i]
      return copy
    })
  }

  return (
    <div>
      <h1>{checklistData.heading}</h1>
      <fieldset class='form-group'>
        {checklistData.tasks.map((task, i) =>
          <label class='paper-check' key={i}>
            <input type='checkbox' class='task-check' checked={checked[i]} onClick={() => handleCheckboxClick(i)} />
            <span>{task.description}</span>
          </label>
        )}
      </fieldset>
    </div>
  )
}
