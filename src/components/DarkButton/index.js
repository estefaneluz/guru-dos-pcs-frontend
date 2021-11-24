import React from 'react';
import './styles.css';

export default function DarkButton({ label, icon, click }) {
	return (
		<button className="dark-button">
				{label}
				<img src={icon} alt={`${label} icone`} />
		</button>
	);
}
