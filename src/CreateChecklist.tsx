import React from 'react'
import { useState } from 'preact/hooks'
import { Task } from './Checklist'
import { saveChecklist } from './ChecklistService'
import { useLocation } from 'preact-iso'

// const morningChecklist: Checklist = {
//   id: 'morning-checklist',
//   name: 'Morning checklist',
//   description: 'Good morning! 🌞',
//   tasks: [
//     { description: 'Check calendar schedule' },
//     { description: 'Check MRs and deploys' },
//     { description: 'Check board' },
//     { description: 'Check personal tasks' },
//     { description: 'Emergency scan Slack' },
//     { description: 'Emergency scan email' },
//     { description: 'Organize quick notes' }
//   ]
// }

function getUrlSlug (name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export const CreateChecklist: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [tasks, setTasks] = useState<Task[]>(Array(3).fill({ description: '' }))
  const location = useLocation()

  const save = (): void => {
    const checklist = {
      id: getUrlSlug(name),
      name,
      description,
      tasks
    }

    saveChecklist(checklist)
    location.route('/')
  }

  const handleTaskChange: (i: number, e: React.ChangeEvent<HTMLInputElement>) => void = (i, e) => {
    const newTasks = [...tasks]
    newTasks[i] = { description: (e.target as HTMLInputElement)?.value }
    setTasks(newTasks)
  }

  const addTask = (): void => {
    setTasks([...tasks, { description: '' }])
  }

  const removeTask: (indexToRemove: number) => void = (indexToRemove: number) => {
    setTasks(tasks.filter((_, i) => i !== indexToRemove))
  }

  const isInputValid: () => boolean = () => {
    return name.trim() !== '' && tasks.every(task => task.description.trim() !== '')
  }

  return (
    <div>

      <fieldset class='form-group'>
        <label htmlFor='nameInput'>Name:</label>
        <input
          type='text'
          placeholder='Morning Checklist'
          id='nameInput'
          class='input-block'
          value={name}
          onKeyUp={e => { setName((e.target as HTMLInputElement)?.value) }}
        />
        <span className='text-muted'>Checklist URL slug: {getUrlSlug(name)}</span>
      </fieldset>

      <fieldset class='form-group'>
        <label htmlFor='descriptionInput'>Description:</label>
        <input
          type='text'
          placeholder='Checklist to kick off the day 🌞'
          id='descriptionInput'
          class='input-block'
          value={description}
          onKeyUp={e => { setDescription((e.target as HTMLInputElement)?.value) }}
        />
      </fieldset>

      {tasks.map(
        (task, i) => (
          <fieldset class='form-group' key={i}>
            <input type='checkbox' class='paper-check' checked disabled style={{ display: 'inline' }} />&nbsp;
            <label for={`input${i}`}>
              <input
                type='text'
                placeholder={`Task ${i + 1}`}
                id={`input${i}`}
                class='input-block'
                value={task.description}
                onChange={(e) => handleTaskChange(i, e)}
              />
            </label>
            <button onClick={() => removeTask(i)}>🗑️</button>
          </fieldset>
        )
      )}
      <button onClick={addTask}>➕ Add</button>
      <button class='paper-btn btn-primary' onClick={save} disabled={!isInputValid()}>Save</button>
    </div>
  )
}
