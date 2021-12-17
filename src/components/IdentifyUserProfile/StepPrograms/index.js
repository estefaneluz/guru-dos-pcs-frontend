import React, { useState, useEffect } from 'react';
import './styles.css';
import Step from '../../Step';
import ButtonMenu from '../../ButtonMenu';
import ConsumeHeader from '../../ConsumeHeader';
import ProgramsButton from '../../ProgramsButton';
import Skeleton from '@mui/material/Skeleton';

export default function StepPrograms() {
  const [toggleMenu, setToggleMenu] = useState(-1);
  const [categories, setCategories] = useState([]);
  const [programs, setProgramas] = useState([]);

  const handleClicked = async (id) => {
    setToggleMenu(id)
  }

  useEffect(() => {
    const getPrograms = async () => {
      const response = await fetch(`https://guru-dos-pcs-backend.herokuapp.com/programa/${toggleMenu}`);
      setProgramas(await response.json());
    }

    getPrograms()
  }, [toggleMenu])

  useEffect(() => {
    const getAllCategories = async () => {
      const response = await fetch("https://guru-dos-pcs-backend.herokuapp.com/categorias");
      setTimeout(setCategories(await response.json()), 1000);
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
        description={
          !!categories.length ? 'Quais programas você usa ou pretende utilizar' : 'Carregando categorias...'
        }
        helpText={ !!categories.length ? "Se o programa não estiver na lista, selecione um similiar."
          : ""
        }
        id="select-programs"
      />
        <div className="button-wrapper">
          {!!categories.length ? categories.map((category) => {
            return (
              <ButtonMenu 
                key={category.id} 
                title={category.categoria}
                click={() => handleClicked(category.id)}
                classAtivated={toggleMenu === category.id ? '--activated' : ''}
              />
            )
          })
          : <>
              <Skeleton  sx={{ bgcolor: '#212B33' }} variant="rectangular" width={116} height={53} />
              <Skeleton sx={{ bgcolor: '#212B33' }} variant="rectangular" width={116} height={53} />
              <Skeleton sx={{ bgcolor: '#212B33' }} variant="rectangular" width={116} height={53} />
              <Skeleton sx={{ bgcolor: '#212B33' }} variant="rectangular" width={116} height={53} />
            </> }
        </div>
        {(toggleMenu !== -1) && <ConsumeHeader />}
        <div className="programs-button-wrapper">
          {(toggleMenu !== -1 && !!programs.length) && programs.map((program) =>
              <ProgramsButton program={program} />
          )}
        </div>
    </>
	);
}
