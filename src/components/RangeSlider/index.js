import React, { useState } from 'react';
import Arrow from '../../assets/arrow-right.svg';

import './style.css';

export const RangeSlider = () => {
	const [ minValue, setMinValue ] = useState();
	const [ maxValue, setMaxValue ] = useState();

	return (
		<div className="range-wrapper">
			<div className="checkbox">
				<label htmlFor="checkbox"> Sem valor estipulado </label>
				<input name="checkbox" type="checkbox" />
			</div>

			<input type="range" min="0" max="50" value="25" />
			<input type="range" min="50" max="100" value="75" />

			<div className="ranges">
				<div className="track" />
				<div className="range" />
				<div className="thumb --left" />
				<div className="thumb --right" />
			</div>

			<button className="button">
				Gerar computador
				<img src={Arrow} alt="seta" />
			</button>
		</div>
	);
};
