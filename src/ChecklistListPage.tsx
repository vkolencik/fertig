import React from 'react'
import { getChecklists } from './GetChecklist'

export const ChecklistListPage: React.FC = () => (
  <>
    <ul>{getChecklists().map(cl => (<li key={cl.id}><a href={`/checklist/${cl.id}`}>{cl.name}</a></li>))}</ul>
    <a class='paper-btn btn-primary-outline' href='/new-checklist'>Create new checklist</a>
  </>)
