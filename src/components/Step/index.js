import React from 'react';
import './styles.css';
import questionIcon from '../../assets/question-mark-icon.svg';

export default function Step({number, title, description, helpText}) {
	return (
		<div className="container-step">
			<div className="step-number">{number}</div>
			<h2>{title}</h2>
			<p className="step-description">{description}</p>
			{!!helpText && <img src={questionIcon} alt="icone de dúvida" /> }
		</div>
	);
}