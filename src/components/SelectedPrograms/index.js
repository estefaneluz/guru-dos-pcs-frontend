import React from 'react'
import './style.css'

export const SelectedPrograms = ({selectedPrograms}) => {
  return (
    <div className="selected-wrapper">
      <div className="content">
        <ul>
          {!!selectedPrograms.length && selectedPrograms.map((program) =>
            <li className={program.nivel}>{program.nome}</li>
          )}
        </ul>
      </div>
    </div>
  )
}
