const checklistPendingProp = 'isChecklistPending'

export const setChecklistPending: () => void = () => { window[checklistPendingProp] = true }
export const unsetChecklistPending: () => void = () => { window[checklistPendingProp] = false }

unsetChecklistPending()

window.addEventListener('beforeunload', function (e) {
  if (window[checklistPendingProp] === true) {
    e.preventDefault()
    e.returnValue = ''
  }
})
