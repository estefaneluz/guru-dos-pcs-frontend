import React from 'react';
import './styles.css';
import logoIcon from '../../assets/logo.png';

export default function Header() {
	return (
		<header>
			<div className="logo">
				<img src={logoIcon} alt="Logo do Guru dos Pcs. Um Guru com peças de computadores em volta." />
				<p>GURU DOS PC's</p>
			</div>
			<div className="container-header">
				<h1>
					Encontre o <span>computador adequado</span> ao seu <span> perfil </span>
				</h1>
				<button className="btn-light-green">Descubra agora</button>
			</div>
		</header>
	);
}
