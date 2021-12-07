import React, { useState } from 'react';
import { SelectedPrograms } from '../SelectedPrograms';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';

import './style.css';

export default function ConsumeHeader({ selectedPrograms }) {
	const [ clicked, setClicked ] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<div className="wrapper">
			<div className="heading">
				<p> Consumo </p>
				<p className="selected" onClick={handleClick}>
					Programas Selecionados
					<img src={clicked ? arrowUp : arrowDown} alt="icone de seta" />
				</p>
			</div>
			<div className="tag-wrapper">
				<ul>
					<li>
						<div className="high" />
						<p> Alto </p>
					</li>
					<li>
						<div className="medium" />
						<p> Médio </p>
					</li>
					<li>
						<div className="low" />
						<p> Baixo </p>
					</li>
				</ul>
			</div>
			{clicked && <SelectedPrograms selectedPrograms={selectedPrograms} />}
		</div>
	);
};
