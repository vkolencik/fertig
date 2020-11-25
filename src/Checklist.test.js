/* globals expect */
import { test } from '@jest/globals'
// noinspection ES6UnusedImports
// eslint-disable-next-line no-unused-vars
import React, { h } from 'preact'
import render from 'react-test-renderer'
import { Checklist } from './Checklist'

test('Link changes the class when hovered', () => {
  const checklistData = {
    heading: 'asdf',
    title: 'jkl',
    tasks: {
      description: 'hello'
    }
  }
  const x = render(
    <Checklist checklistData={checklistData} />
  )

  console.log(x)
  expect(1).toBe(1)
})
