import { render } from 'preact'
import { LocationProvider, Route, Router } from 'preact-iso'

import { Header } from './Header.jsx'
import './style.css'
import React from 'react'
import ChecklistPage from './ChecklistPage'
import { ChecklistListPage } from './ChecklistListPage'

const NotFound: React.FC = () => <div>Not found</div>

const CreateChecklist: React.FC = () => <>TODO</>

export const App: React.FC = () => {
  return (
    <div className='paper container'>
      <LocationProvider>
        <Header />
        <main>
          <Router>
            <Route path='/' component={ChecklistListPage} />
            <Route path='/new-checklist' component={CreateChecklist} />
            <Route path='/checklist/:checklistId' component={ChecklistPage} />
            <Route default component={NotFound} />
          </Router>
        </main>
      </LocationProvider>
    </div>
  )
}

const appElement = document.getElementById('app')
if (appElement === null) {
  throw Error('Cannot find app element')
}

render(<App />, appElement)

document.querySelector('#darkswitch')?.addEventListener('change', (e) => {
  const dark = (e.target as HTMLInputElement).checked
  document.documentElement.className = dark ? 'dark' : ''
})
