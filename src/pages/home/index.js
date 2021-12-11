import React, { useState, useContext } from 'react'
import './styles.css'

import Header from '../../components/Header'
import ModalFeedback from '../../components/Modal/ModalFeedback'
import MotalItemDetails from '../../components/Modal/ModaItemDetails'

import StepPrograms from '../../components/IdentifyUserProfile/StepPrograms'
import StepBudget from '../../components/IdentifyUserProfile/StepBudget'
import StepComputerResult from '../../components/IdentifyUserProfile/StepComputerResult'

import { UserProfileStatesContext } from '../../contexts/UserProfileStatesContext'

export default function Home() {
  const [openFeedback, setOpenFeedback] = useState(false)
  const [openItemDetails, setOpenItemDetails] = useState(false)

  const [selectedPrograms, setSelectedPrograms] = useState([]);
	const [budget, setBudget ] = useState([ 1500, 3000 ]);
	const [freeBudget, setFreeBudget] = useState(false);  

  const userProfileContextValues = {
    selectedPrograms,
    setSelectedPrograms,
    budget,
    setBudget,
    freeBudget,
    setFreeBudget
  }

  const handleModalFeedback = () => setOpenFeedback(!openFeedback)
  const handleModalItens = () => setOpenItemDetails(!openItemDetails)

  return (
    <>
      <Header />
      <UserProfileStatesContext.Provider value={userProfileContextValues}>
        <StepPrograms />
        <StepBudget />
        <StepComputerResult 
          handleModalFeedback={handleModalFeedback}
          handleModalItens={handleModalItens}
        />
        <MotalItemDetails handleModal={handleModalItens} open={openItemDetails} />
        <ModalFeedback handleModal={handleModalFeedback} open={openFeedback} />
      </ UserProfileStatesContext.Provider>
    </>
  )
}
