import {useEffect} from 'preact/hooks'
import {Checklist} from './Checklist'
import {DarkModeSwitch} from './DarkModeSwitch'
import React from 'react'
import {useRoute} from "preact-iso";
import {getChecklist} from "./GetChecklist";

const ChecklistPage: React.FC = () => {
  const {checklistId} = useRoute().params;
  const checklist = getChecklist(checklistId)

  if (checklist === null) {
    return (<div>Not found</div>)
  }
    
  useEffect(() => { document.title = checklist.name })

  return (
    <div class='paper container'>
      <Checklist checklistData={checklist} />
      <DarkModeSwitch />
    </div>
  )
}

export default ChecklistPage
