import React, { useState } from 'react';
import './styles.css';

export default function ButtonMenu({title}) {
	const [toggleButton, setToggleButton] = useState(false);

	const handleButton = () => {
		setToggleButton(!toggleButton);
	}

	return (
		<button
			className={`button-menu ${!!toggleButton && '--activated'}`} 
			onClick={handleButton}
		>
      {title}
		</button>
	);
}
