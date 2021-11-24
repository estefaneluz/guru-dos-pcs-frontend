import React, { useState } from 'react';
import './styles.css';

export default function ButtonMenu({ title, classAtivated, click }) {
	return (
		<button className={`button-menu ${classAtivated}`} onClick={click}>
			{title}
		</button>
	);
}
