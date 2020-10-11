window.onload = () => {
  window.addEventListener('beforeunload', function (e) {
    if (Array.from(document.querySelectorAll('input.task-check'))
      .filter(elm => !elm.checked)
      .length > 0) {
      e.preventDefault()
      e.returnValue = ''
    }
  })

  document.querySelector('#darkswitch').addEventListener('change', (e) => {
    const dark = e.target.checked
    document.documentElement.className = dark ? 'dark' : ''
    document.documentElement.style.backgroundColor = dark ? 'black' : 'white'
  })
}