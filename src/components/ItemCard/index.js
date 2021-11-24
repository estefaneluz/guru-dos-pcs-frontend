import React from 'react';
import threeDotsIcon from '../../assets/three-dots.svg';
import './styles.css';

export default function ItemCard(props) {
	return (
		<div className="card">
      <div className="card-header">
        <img src={props.icon} alt={`${props.title} icon`}/>
        <p className="card-title">{props.title}</p>
        <div className="tag-container">
          <div className="tag --blue">{props.type}</div>
          <div className="tag --green">{props.brand}</div>
        </div>
        <img src={threeDotsIcon} alt="icone para exibir mais informações da peça" />
      </div>

      {/* <div>
        <p><span></span></p>
        <p><span></span></p>

      </div> */}
    </div>
	);
}
