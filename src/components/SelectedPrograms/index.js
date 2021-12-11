import React, { useContext } from 'react';
import './style.css';
import { UserProfileStatesContext } from '../../contexts/UserProfileStatesContext';

export const SelectedPrograms = () => {
	const { selectedPrograms } = useContext(UserProfileStatesContext);

	return (
		<div className="selected-wrapper">
			<div className="content">
				<ul>
					{!!selectedPrograms.length &&
						selectedPrograms.map((program) => <li className={program.nivel}>{program.nome}</li>)}
				</ul>
			</div>
		</div>
	);
};
