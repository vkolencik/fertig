// noinspection ES6UnusedImports
import React, { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { Checklist } from './Checklist'
import { DarkModeSwitch } from './DarkModeSwitch'

const checklistData = {
  title: 'Morning checklist',
  heading: 'Good morning! 🌞',
  tasks: [
    { description: 'Check Outlook calendar schedule' },
    { description: 'Check Jira board' },
    { description: 'Check Gitlab deploys and MRs' },
    { description: 'Check personal Trello' },
    { description: 'Scan Slack' },
    { description: 'Scan email' }
  ]
}

const App = () => {
  useEffect(() => {document.title = checklistData.title})

  return (
    <div class="paper container">
      <Checklist checklistData={checklistData}/>
      <DarkModeSwitch/>
    </div>
  )
}

export default App

