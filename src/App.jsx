/* global localStorage */
// noinspection ES6UnusedImports
import React, { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { Checklist } from './Checklist'
import { DarkModeSwitch } from './DarkModeSwitch'

const storedChecklists = localStorage.getItem('checklists')
let checklistsData
if (storedChecklists) {
  checklistsData = JSON.parse(storedChecklists)
} else {
  checklistsData = [{
    title: 'Morning checklist',
    heading: 'Good morning! 🌞',
    tasks: [
      { description: 'Check Outlook calendar schedule' },
      { description: 'Check Gitlab deploys and MRs' },
      { description: 'Check Jira board' },
      { description: 'Check personal Trello' },
      { description: 'Scan Slack' },
      { description: 'Scan email' },
      { description: 'Organize OneNote quick notes' }
    ]
  }]
}

const App = () => {
  useEffect(() => { document.title = checklistsData[0].title })

  return (
    <div class='paper container'>
      <Checklist checklistData={checklistsData[0]} />
      <DarkModeSwitch />
    </div>
  )
}

export default App
