import React from 'react'
import './style.css'

export const SelectedPrograms = () => {
  return (
    <div className="selected-wrapper">
      <div className="content">
        <ul>
          <li className="high">Android Studio</li>
          <li className="low">Sublime Text</li>
          <li className="low">Visual Studio Code</li>
          <li className="medium">PyCharm</li>
        </ul>
      </div>
    </div>
  )
}
