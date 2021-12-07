import React, { useState } from 'react';
import './style.css';

export default function ProgramsButton({ program, setSelectedPrograms, selectedPrograms }) {
	const [ activeButton, setActiveButton ] = useState(false);
	const findProgram = (p) => p.nome === program.nome;

	const handleClick = () => {
		const copy = [ ...selectedPrograms ];

		setActiveButton(!activeButton);
		if (selectedPrograms.length && selectedPrograms.find(findProgram)) {
			const index = copy.findIndex(p => p.nome === program.nome);
			copy.splice(index, 1);
			setSelectedPrograms(copy);

		} else {
			copy.push(program);
			setSelectedPrograms(copy);
		}
	};

	return (
		<button
			className={`selected-button ${program.nivel} ${selectedPrograms.find(findProgram) ? '--selected' : ''}`}
			onClick={handleClick}
		>
			{program.nome}
		</button>
	);
}
