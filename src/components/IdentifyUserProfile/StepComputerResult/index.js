import React, { useState } from 'react';
import Step from '../../Step';
import DarkButton from '../../DarkButton';
import ItemCard from '../../ItemCard';
import cpuIcon from '../../../assets/computer-components/cpu.svg'
import starFeedbackIcon from '../../../assets/star-feedback.svg'

import './styles.css';

export default function StepComputerResult({handleModalFeedback, handleModalItens}) {
	
	return (
	<>
     <Step
        number="3"
        title="Match! Conheça o computador"
        description="De acordo com as informações fornecidas, geramos o computador adequado."
        mt="124px"
      />
      <DarkButton 
        className="ml-55-px"
        label="Enviar Feedback"
        icon={starFeedbackIcon}
        click={handleModalFeedback}
      />
      <div className="card-wrapper ml-55-px">
        <ItemCard
          title='Ryzen 3 3200G'
          openModal={handleModalItens}
          icon={cpuIcon}
          type="Processador"
          brand="AMD"
          price="656,00"
          content={[
            {
              label: "Frequência",
              value: "3.2 GHz"
            },
            {
              label: "Socket",
              value: "AM4"
            }
          ]}
        />
        <ItemCard
          title='Ryzen 3 3200G'
          openModal={handleModalItens}
          icon={cpuIcon}
          type="Processador"
          brand="AMD"
          price="656,00"
          content={[
            {
              label: "Frequência",
              value: "3.2 GHz"
            },
            {
              label: "Socket",
              value: "AM4"
            }
          ]}
        />
      </div>
	</>
	);
};
