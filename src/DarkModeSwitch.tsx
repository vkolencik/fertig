import React from 'react'
import { useEffect, useState } from 'preact/hooks'

const isSystemDarkMode: () => boolean = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
//   const newColorScheme = event.matches ? "dark" : "light";
// });

export const DarkModeSwitch: React.FC = () => {
  const [isDark, setDark] = useState<boolean>(isSystemDarkMode)
  useEffect(() => {
    document.documentElement.className = isDark ? 'dark' : ''
  }, [isDark])
  
  const toggleDarkMode: () => void = () => setDark(prevState => !prevState)

  return (
    <fieldset class="form-group">
      <label class="paper-switch-2">
        <input id="darkswitch" type="checkbox" checked={isDark} onChange={toggleDarkMode}/>
        <span class="paper-switch-slider round"/>
      </label>
      <label for="darkswitch" class="paper-switch-2-label">
        🦇
      </label>
    </fieldset>)
}
