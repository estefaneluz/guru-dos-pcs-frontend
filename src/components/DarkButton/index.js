import React from 'react';
import './styles.css';

export default function DarkButton({ label, icon, click, className, link }) {
	return (
		<a href={!!link && link} className={`dark-button ${className ? className : ''}`} onClick={click}>
			{label}
			<img src={icon} alt={`${label} icone`} />
		</a>
	);
}
