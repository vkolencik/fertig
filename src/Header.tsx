import { useLocation } from 'preact-iso'
import React from 'react'

export const Header: React.FC = () => {
  const { url } = useLocation()

  return (
    <header>
      <nav>
        <a href='/' class={url === '/' ? 'active' : ''}>
          Home
        </a>
      </nav>
    </header>
  )
}
