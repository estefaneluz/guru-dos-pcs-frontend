import React, { useState } from 'react';
import './styles.css';
import Step from '../../Step';
import ButtonMenu from '../../ButtonMenu';
import ConsumeHeader from '../../ConsumeHeader';
import ProgramsButton from '../../ProgramsButton';
import data from '../../ButtonMenu/mock.json';

export default function StepPrograms() {
  const [toggleMenu, setToggleMenu] = useState(-1);

  const handleClicked = (id) => {
    setToggleMenu(id)
  }

	return (
		<>
      <Step
        number="1"
        mt="246px"
        mb="40px"
        title="Diagnosticar Perfil"
        description="Quais programas você usa ou pretende utilizar?"
        helpText="Se o programa não estiver na lista, selecione um similiar."
      />
        <div className="button-wrapper">
          {data.map((item, id) => {
            return (
              <ButtonMenu 
                key={id} 
                title={item.name}
                click={() => handleClicked(id)}
                classAtivated={toggleMenu === id ? '--activated' : ''}
              />
            )
          })}
        </div>
        {(toggleMenu !== -1) && <ConsumeHeader />}
        {(toggleMenu !== -1) && (
          <div className="programs-button-wrapper">
            <ProgramsButton
              title="Visual Studio Code"
              performance="low"
            />
            <ProgramsButton
              title="Android Studio"
              performance="high"
            />
            <ProgramsButton
              title="Eclipse"
              performance="high"
            />
            <ProgramsButton
              title="Jupyter"
              performance="medium"
            />
            <ProgramsButton
              title="WebStorm"
              performance="low"
            />
          </div>
      )}
    </>
	);
}
