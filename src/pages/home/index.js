import React, { useState } from 'react'
import './styles.css'

import Header from '../../components/Header'
import ModalFeedback from '../../components/Modal/ModalFeedback'
import MotalItemDetails from '../../components/Modal/ModaItemDetails'

import StepPrograms from '../../components/IdentifyUserProfile/StepPrograms'
import StepBudget from '../../components/IdentifyUserProfile/StepBudget'
import StepComputerResult from '../../components/IdentifyUserProfile/StepComputerResult'

export default function Home() {
  const [openFeedback, setOpenFeedback] = useState(false)
  const [openItemDetails, setOpenItemDetails] = useState(false)

  const handleModalFeedback = () => setOpenFeedback(!openFeedback)
  const handleModalItens = () => setOpenItemDetails(!openItemDetails)

  return (
    <>
      <Header />
      <StepPrograms />
      <StepBudget />
      <StepComputerResult 
        handleModalFeedback={handleModalFeedback}
        handleModalItens={handleModalItens}
      />
      <MotalItemDetails handleModal={handleModalItens} open={openItemDetails} />
      <ModalFeedback handleModal={handleModalFeedback} open={openFeedback} />
    </>
  )
}
