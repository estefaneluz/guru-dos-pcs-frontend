import React, { useState } from 'react'
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
  const [openFeedback, setOpenFeedback] = useState(false)
  const [openItemDetails, setOpenItemDetails] = useState(false)

  const [selectedPrograms, setSelectedPrograms] = useState([]);
	const [budget, setBudget ] = useState([ 1500, 3000 ]);
	const [freeBudget, setFreeBudget] = useState(false);  

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

  return (
    <>
      <Header />
      <UserProfileStatesContext.Provider value={userProfileContextValues}>
        <StepPrograms />
        <StepBudget />
        <ModalStatesContext.Provider value={modalContextValues}>
          <StepComputerResult />
          <MotalItemDetails />
          <ModalFeedback />
        </ModalStatesContext.Provider>
      </ UserProfileStatesContext.Provider>
    </>
  )
}
