import React, { useContext } from 'react';
import Step from '../../Step';
import DarkButton from '../../DarkButton';
import ItemCard from '../../ItemCard';
import starFeedbackIcon from '../../../assets/star-feedback.svg'

import { ModalStatesContext } from '../../../contexts/ModalStatesContext';

import './styles.css';

export default function StepComputerResult({computer}) {

  const { handleModalFeedback, handleSelectedComponent  } = useContext(ModalStatesContext);
	
	return (
	<>
     <Step
        number="3"
        title="Match! Conheça o computador"
        description="De acordo com as informações fornecidas, geramos o computador adequado."
        mt="124px"
        id="computer-result"
      />
      <DarkButton 
        className="ml-55-px"
        label="Enviar Feedback"
        icon={starFeedbackIcon}
        click={handleModalFeedback}
      />
      <div className="card-wrapper ml-55-px">
        {computer.computer.map((componente) => {
          return  (
          <ItemCard
            title={componente.nome}
            openModal={() => handleSelectedComponent(componente)}
            icon={componente.icon}
            type={componente.componente}
            brand={componente.marca}
            price={componente.preco}
            content={componente.content}
          />
        )})}
      </div>
	</>
	);
};
