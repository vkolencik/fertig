// noinspection ES6UnusedImports
import React, {h, Fragment} from 'preact'

export const Checklist = ({ checklistData }) => (
  <Fragment>
    <h1>{checklistData.heading}</h1>
    <fieldset class="form-group">
      {checklistData.tasks.map(task =>
        <label class="paper-check"><input type="checkbox" class="task-check"/>
          <span>{task.description}</span>
        </label>
      )}
    </fieldset>
  </Fragment>
)