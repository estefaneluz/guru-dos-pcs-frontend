import React from 'react';
import './styles.css';

export default function ButtonMenu({ label, icon, click }) {
	return (
		<button className="dark-button">
				{label}
				<img src={icon} alt={`${label} icone`} />
		</button>
	);
}
