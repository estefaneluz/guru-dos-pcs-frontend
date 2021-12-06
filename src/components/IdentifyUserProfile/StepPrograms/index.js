import React, { useState, useEffect } from 'react';
import './styles.css';
import Step from '../../Step';
import ButtonMenu from '../../ButtonMenu';
import ConsumeHeader from '../../ConsumeHeader';
import ProgramsButton from '../../ProgramsButton';
import data from '../../ButtonMenu/mock.json';

export default function StepPrograms() {
  const [toggleMenu, setToggleMenu] = useState(-1);
  const [categories, setCategories] = useState([]);
  const [programs, setProgramas] = useState([]);

  const handleClicked = async (id) => {
    setToggleMenu(id)
  }

  useEffect(() => {
    const getPrograms = async () => {
      const response = await fetch(`http://localhost:5000/programa/${toggleMenu}`, { method: "GET" });
      setProgramas(await response.json());
    }

    getPrograms()
  }, [toggleMenu])

  useEffect(() => {
    const getAllCategories = async () => {
      const response = await fetch("http://localhost:5000/categorias", { method: "GET" });
      setCategories(await response.json());
    }

    getAllCategories()
  }, [])

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
          {!!categories.length && categories.map((category) => {
            return (
              <ButtonMenu 
                key={category.id} 
                title={category.categoria}
                click={() => handleClicked(category.id)}
                classAtivated={toggleMenu === category.id ? '--activated' : ''}
              />
            )
          })}
        </div>
        {(toggleMenu !== -1) && <ConsumeHeader />}
        <div className="programs-button-wrapper">
          {(toggleMenu !== -1 && !!programs.length) && programs.map((program) =>
              <ProgramsButton
                title={program.nome}
                performance={program.nivel}
              />
          )}
        </div>
    </>
	);
}
