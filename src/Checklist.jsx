// noinspection ES6UnusedImports
import React, { h, Fragment } from 'preact'
import PropTypes from 'prop-types'

export const Checklist = ({ checklistData }) => (
  <Fragment>
    <h1>{checklistData.heading}</h1>
    <fieldset class='form-group'>
      {checklistData.tasks.map((task, i) =>
        <label class='paper-check' key={i}><input type='checkbox' class='task-check' />
          <span>{task.description}</span>
        </label>
      )}
    </fieldset>
  </Fragment>
)

Checklist.propTypes = {
  checklistData: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired
    })).isRequired
  })
}
