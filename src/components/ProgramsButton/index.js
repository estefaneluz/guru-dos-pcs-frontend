import React from 'react';
import { useState } from 'react/cjs/react.development';
import './style.css';

export const ProgramsButton = ({ title, performance }) => {
	const [ activeButton, setActiveButton ] = useState(false);

	const handleClick = () => {
		setActiveButton(!activeButton);
	};

	return (
		<button className={`selected-button ${performance} ${activeButton ? '--selected' : ''}`} onClick={handleClick}>
			{title}
		</button>
	);
};
