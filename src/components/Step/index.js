import React from 'react'
import './styles.css'
import questionIcon from '../../assets/question-mark-icon.svg'

export default function Step({ id, number, title, description, helpText, mt, mb }) {
  return (
    <div id={id} style={{ marginTop: mt, marginBottom: mb }} className="container-step">
      <div className="step-number">{number}</div>
      <h2>{title}</h2>
      <p className="step-description">{description}</p>
      {!!helpText && <img src={questionIcon} alt="icone de dúvida" />}
    </div>
  )
}
