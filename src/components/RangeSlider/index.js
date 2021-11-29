import React, { useState } from 'react';
import arrowRight from '../../assets/arrow-right.svg';
import { Box, Slider } from '@mui/material/';
import DarkButton from '../DarkButton';

import './style.css';

function valuetext(value) {
  return `R$ ${value}`;
}

const minDistance = 1;

const marks = [
  {
    value: 1000,
    label: 'R$ 1.000,00',
  },
  {
    value: 20000,
    label: 'R$ 20.000,000',
  },
];

const currencyBRL = (value) => {
  const formattedValue = value.toLocaleString(
    'pt-BR', 
    { style: 'currency', currency: 'BRL' }
  );

    return formattedValue;
};

export const RangeSlider = () => {
	const [price, setPrice] = React.useState([1500, 2000]);

	const handlePrice = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
    }
		
  };


	return (
		<div className="range-wrapper">
			<Box sx={{ width: 470 }}>
				<Slider
					getAriaLabel={() => 'Minimum distance'}
					value={price}
					onChange={handlePrice}
					valueLabelDisplay="auto"
					getAriaValueText={valuetext}
					valueLabelFormat={currencyBRL}
					min={1000}
					max={10000}
					// marks={marks}
					sx={{ color: 'white' }}
					disableSwap
				/>
			</Box>
			<div className="checkbox">
				<label htmlFor="checkbox"> Sem valor estipulado </label>
				<input name="checkbox" type="checkbox" />
			</div>
			<DarkButton label="Gerar Computador" icon={arrowRight}/>
		</div>
	);
};
