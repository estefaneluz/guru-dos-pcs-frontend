import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import Step from '../../components/Step';
import ButtonMenu from '../../components/ButtonMenu';

export default function Home() {
	return (
		<>
			<Header/>
			<Step 
				number="1"
				title="Diagnosticar Perfil"
				description="Quais programas você usa ou pretende utilizar?"
				helpText="Se o programa não estiver na lista, selecione um similiar."
			/>
			<ButtonMenu 
				title="Design"
			/>
		</>
	);
}
