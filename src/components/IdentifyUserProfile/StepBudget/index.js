import React, { useContext } from 'react';
import arrowRight from '../../../assets/arrow-right.svg'
import { Box, Slider } from '@mui/material/';
import DarkButton from '../../DarkButton';
import Step from '../../Step';
import { UserProfileStatesContext } from '../../../contexts/UserProfileStatesContext';
import maskCurrencyBRL from '../../../functions/maskCurrencyBRL'

import './styles.css';

function valuetext(value) {
	return `R$ ${value}`;
}

const minDistance = 1;

export default function StepBudget({createComputer}) {
	const { budget, setBudget, freeBudget, setFreeBudget } = useContext(UserProfileStatesContext);
	
	const handleChecked = (e) => setFreeBudget(e.target.checked);

	const handleBudget = (event, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setBudget([ Math.min(newValue[0], budget[1] - minDistance), budget[1] ]);
		} else {
			setBudget([ budget[0], Math.max(newValue[1], budget[0] + minDistance) ]);
		}
	};

	return (
		<>
		<Step
        number="2"
        title="Valor de Investimento"
        description="Qual o valor máximo e mínimo que está disposto a investir?"
        mt="124px"
    />
		<div className="range-wrapper">
			{!freeBudget && (
				<>
				<Box sx={{ width: 470, marginTop: 3 }}>
					<Slider
						getAriaLabel={() => 'Minimum distance'}
						value={budget}
						onChange={handleBudget}
						valueLabelDisplay="auto"
						getAriaValueText={valuetext}
						valueLabelFormat={maskCurrencyBRL}
						min={1000}
						max={10000}
						sx={{ color: 'white' }}
						disableSwap
					/>
				</Box>
				<div className="row selected-budget">
					<p>
						<span>Valor mínimo: </span> 
						{budget[0].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
					</p>
					<p>
						<span> Valor máximo: </span>
						{budget[1].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
					</p>
				</div>
				</>
			)}
			<div className="checkbox">
				<label htmlFor="checkbox"> Sem valor estipulado </label>
				<input checked={freeBudget} name="checkbox" type="checkbox" onChange={(e) => handleChecked(e)} />
			</div>
			<DarkButton click={createComputer} label="Gerar Computador" icon={arrowRight} link='#computer-result' />
		</div>
	</>
	);
};
