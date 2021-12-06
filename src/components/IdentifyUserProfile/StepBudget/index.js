import React, { useState } from 'react';
import arrowRight from '../../../assets/arrow-right.svg'
import { Box, Slider } from '@mui/material/';
import DarkButton from '../../DarkButton';
import Step from '../../Step';

import './style.css';

function valuetext(value) {
	return `R$ ${value}`;
}

const minDistance = 1;

const currencyBRL = (value) => {
	const formattedValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

	return formattedValue;
};

export default function StepBudget() {
	const [price, setPrice ] = useState([ 1500, 3000 ]);
	const [check, setCheck] = useState(false);  

	const handleChecked = (e) => setCheck(e.target.checked);

	const handlePrice = (event, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setPrice([ Math.min(newValue[0], price[1] - minDistance), price[1] ]);
		} else {
			setPrice([ price[0], Math.max(newValue[1], price[0] + minDistance) ]);
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
			{!check && (
				<>
				<Box sx={{ width: 470, marginTop: 3 }}>
					<Slider
						getAriaLabel={() => 'Minimum distance'}
						value={price}
						onChange={handlePrice}
						valueLabelDisplay="auto"
						getAriaValueText={valuetext}
						valueLabelFormat={currencyBRL}
						min={1000}
						max={10000}
						sx={{ color: 'white' }}
						disableSwap
					/>
				</Box>
				<div className="row selected-price">
					<p>
						<span>Valor mínimo: </span> 
						{price[0].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
					</p>
					<p>
						<span> Valor máximo: </span>
						{price[1].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
					</p>
				</div>
				</>
			)}
			<div className="checkbox">
				<label htmlFor="checkbox"> Sem valor estipulado </label>
				<input checked={check} name="checkbox" type="checkbox" onChange={(e) => handleChecked(e)} />
			</div>
			<DarkButton label="Gerar Computador" icon={arrowRight} />
		</div>
	</>
	);
};
