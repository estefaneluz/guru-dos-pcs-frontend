import React, { useState, useEffect } from 'react'
import './styles.css'

import Header from '../../components/Header'
import ModalFeedback from '../../components/Modal/ModalFeedback'
import MotalItemDetails from '../../components/Modal/ModaItemDetails'
import ModalAlert from '../../components/Modal/ModalAlert'
import ModalBase from '../../components/Modal'
import { Alert, Snackbar} from '@mui/material/'


import StepPrograms from '../../components/IdentifyUserProfile/StepPrograms'
import StepBudget from '../../components/IdentifyUserProfile/StepBudget'
import StepComputerResult from '../../components/IdentifyUserProfile/StepComputerResult'

import { UserProfileStatesContext } from '../../contexts/UserProfileStatesContext'
import { ModalStatesContext } from '../../contexts/ModalStatesContext'

const AlertMui = React.forwardRef(function Alert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Home() {
  const [openFeedback, setOpenFeedback] = useState(false);
  const [openItemDetails, setOpenItemDetails] = useState(false);
  const [modal, setModal] = useState({type: '', status: false});
  const [error, setError] = useState(false);

  const [selectedPrograms, setSelectedPrograms] = useState([]);
	const [budget, setBudget ] = useState([ 1500, 3000 ]);
	const [freeBudget, setFreeBudget] = useState(false); 

  const [computer, setComputer] = useState({});
  const [selectedComponent, setSelectedComponent] = useState({})
  const [showComputer, setShowComputer] = useState(false);

  const handleModalFeedback = () => setOpenFeedback(!openFeedback)
  const handleModalItens = () => setOpenItemDetails(!openItemDetails)
  const handleCloseModal = () => setModal({type: '', status: false})

  const handleSelectedComponent = (component) => {
      setSelectedComponent(component)
      handleModalItens()
  }

  const continueAndShowComputer = () => {
    setComputer(
      prevState => { return { ...prevState, status: true }}
    )
    handleCloseModal()
  }
  
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
    handleModalItens,
    handleSelectedComponent,
    selectedComponent
  }

  const createComputer = async () => {
    setComputer({});
    setShowComputer(false);

    if(!selectedPrograms.length) {
      setModal({
        type: 'alert',
        status: true
      })
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
      const response = await fetch("https://guru-dos-pcs-backend.herokuapp.com/computador", {
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
      setError(true);
    }
  }

  useEffect(() => {
    if(computer?.status === true) {
      setShowComputer(true);
    } else if(!!computer.computer && !computer.status) {
      setModal({
        type: 'to-continue',
        status: true
      })
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
            <StepComputerResult computer={computer} />
            <MotalItemDetails />
            <ModalFeedback />
          </ModalStatesContext.Provider>
        }

      <ModalAlert handleModal={handleCloseModal} open={modal.type === 'alert' && modal.status} />
      <ModalBase handleModal={handleCloseModal} open={modal.type === 'to-continue' && modal.status}>
        <p className='width-100px'>
          Não é possível gerar um computador dentro do orçamento informado. Deseja gerar mesmo assim?
        </p>
        <div className='row align-end'>
          <button className='btn --decline' onClick={handleCloseModal}>
            Não
          </button>
          <button className='btn --confirm' onClick={continueAndShowComputer}>
            Sim
          </button>
        </div>
      </ModalBase>
      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <AlertMui onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
          Ocorreu um erro ao gerar o computador. Tente novamente mais tarde.
        </AlertMui>
      </Snackbar>
      </ UserProfileStatesContext.Provider>
    </>
  )
}
