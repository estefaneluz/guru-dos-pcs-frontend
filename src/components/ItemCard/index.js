import React from 'react';
import threeDotsIcon from '../../assets/three-dots.svg';
import './styles.css';
import maskCurrencyBRL from '../../functions/maskCurrencyBRL';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: 5,
		top: 3,
		padding: '0 6px',
		backgroundColor: '#F35D5D',
		color: '#FFFFFF',
		fontWeight: 'bold'
	}
}));

export default function ItemCard(props) {
	return (
		<StyledBadge badgeContent={!!props.amount ? `${props.amount}x` : ''} invisible={!props.amount}>
			<div className="card" onClick={props.openModal}>
				<div className="card-header">
					<img src={props.icon} alt={`${props.title} icon`} />
					<p className="item-title">{props.title}</p>
					<div className="tag-container">
						<div className="tag --blue">{props.type}</div>
						<div className="tag --green">{props.brand}</div>
					</div>
					<img src={threeDotsIcon} alt="icone para exibir mais informações da peça" />
				</div>

				<div className="card-content">
					<div className="content-row --one">
						<p>
							<span>{`${props.content[0].label}: `}</span>
							{props.content[0].value}
						</p>
						{props.content.length === 3 && (
							<p>
								<span>{`${props.content[2].label}: `}</span>
								{props.content[2].value}
							</p>
						)}
					</div>
					<div className="content-row --two">
						<p>
							<span>{`${props.content[1].label}: `}</span>
							{props.content[1].value}
						</p>
						<p className="item-price">{maskCurrencyBRL(props.price)}</p>
					</div>
				</div>
			</div>
		</StyledBadge>
	);
}
