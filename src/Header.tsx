import { useLocation } from 'preact-iso'
import React from 'react'
import { DarkModeSwitch } from './DarkModeSwitch'

export const Header: React.FC = () => {
  const { url } = useLocation()

  return (
    <header>
      <div className="row flex-edges">
        <div className="sm-4 col">
          <nav><a href="/" class={url === '/' ? 'active' : ''}>Home</a></nav>
        </div>
        <div className="col"><DarkModeSwitch/></div>
      </div>
    </header>
  )
}
