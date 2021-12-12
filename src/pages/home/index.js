import React, { useState, useEffect } from 'react'
import './styles.css'

import Header from '../../components/Header'
import ModalFeedback from '../../components/Modal/ModalFeedback'
import MotalItemDetails from '../../components/Modal/ModaItemDetails'

import StepPrograms from '../../components/IdentifyUserProfile/StepPrograms'
import StepBudget from '../../components/IdentifyUserProfile/StepBudget'
import StepComputerResult from '../../components/IdentifyUserProfile/StepComputerResult'

import { UserProfileStatesContext } from '../../contexts/UserProfileStatesContext'
import { ModalStatesContext } from '../../contexts/ModalStatesContext'

export default function Home() {
  const [openFeedback, setOpenFeedback] = useState(false);
  const [openItemDetails, setOpenItemDetails] = useState(false);

  const [selectedPrograms, setSelectedPrograms] = useState([]);
	const [budget, setBudget ] = useState([ 1500, 3000 ]);
	const [freeBudget, setFreeBudget] = useState(false); 

  const [computer, setComputer] = useState({});
  const [showComputer, setShowComputer] = useState(false);

  const handleModalFeedback = () => setOpenFeedback(!openFeedback)
  const handleModalItens = () => setOpenItemDetails(!openItemDetails)
  
  const userProfileContextValues = {
    selectedPrograms,
    setSelectedPrograms,
    budget,
    setBudget,
    freeBudget,
    setFreeBudget
  }

  const modalContextValues = {
    openFeedback,
    handleModalFeedback,
    openItemDetails,
    handleModalItens
  }

  const createComputer = async () => {
    setComputer({});
    setShowComputer(false);

    //verifica se não tiver selecionado nenhum programa
    if(!selectedPrograms.length) {
      //alert
      return;
    }

    let orcamento;
    if(freeBudget) {
      orcamento = false;
    } else {
      orcamento = {
        valor_minimo: budget[0],
        valor_maximo: budget[1]
      }
    }

    try { 
      const response = await fetch("http://localhost:5000/computador", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userProfile: {
            selectedPrograms: selectedPrograms,
            orcamento: orcamento
          }
        })
      });

      if(response.ok) {
        setComputer(await response.json());
      }
    } catch {
      return;
    }
  }

  useEffect(() => {
    if(!!computer.computer) {
      setShowComputer(true);
    }
  }, [computer])

  return (
    <>
      <Header />
      <UserProfileStatesContext.Provider value={userProfileContextValues}>
        <StepPrograms />
        <StepBudget createComputer={createComputer} />
        {showComputer &&
          <ModalStatesContext.Provider value={modalContextValues}>
            <StepComputerResult />
            <MotalItemDetails />
            <ModalFeedback />
          </ModalStatesContext.Provider>
        }
      </ UserProfileStatesContext.Provider>
    </>
  )
}
