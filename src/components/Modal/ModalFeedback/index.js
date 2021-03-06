import './styles.css'
import React, { useState, useContext } from 'react'
import ModalBase from '../index'
import FeedbackQuestion from './FeedbackQuestion'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { ModalStatesContext } from '../../../contexts/ModalStatesContext';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ModalFeedback() {
  const [howEasyToGenerate, setHowEasyToGenerate] = useState(0);
  const [serviceSatisfaction, setServiceSatisfaction] = useState(0);
  const [howEasyToUnderstand, setHowEasyToUnderstand] = useState(0);
  const [message, setMessage] = useState('');
  const { handleModalFeedback, openFeedback } = useContext(ModalStatesContext);

  const [alertMessage, setAlertMessage] = useState({severity: '', message: ''});

  const sendFeedback = async () => {
    handleCloseAlert()
    try {
      
      const response = await fetch("https://guru-dos-pcs-backend.herokuapp.com/feedback", {
        method: "POST",
        body: JSON.stringify({
          howEasyToGenerate,
          serviceSatisfaction,
          howEasyToUnderstand,
          message
        }),
        headers: {
          "Content-type": "application/json",
        }, 
      });

      if(response.ok) {
        setAlertMessage({
          severity: 'success',
          message: await response.json()
        })
      }
    } catch {
      setAlertMessage({
        severity: 'error',
        message: "Não foi possível enviar o feedback."
      })
    }
  }

  const handleCloseAlert = () => {
    setAlertMessage({severity: '', message: ''});
  };

  return (
    <>
      <ModalBase handleModal={handleModalFeedback} open={openFeedback} className="column">
        <h3>Feedback</h3>
        <div className="modal-question-wrapper">
          <FeedbackQuestion
            question="Foi fácil gerar um novo computador?" 
            state={howEasyToGenerate}
            setState={setHowEasyToGenerate}
          />
          <FeedbackQuestion
            question="Qual nota você dá para o computador?" 
            state={serviceSatisfaction}
            setState={setServiceSatisfaction}
          />
          <FeedbackQuestion
            question="Foi fácil entender as informações?" 
            state={howEasyToUnderstand}
            setState={setHowEasyToUnderstand}
          />
        </div>
        <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Campo livre para escrever alguma sugestão de melhoria."
        />
        <div className="row space-between">
          <button className="btn-transparent" onClick={handleModalFeedback}>Voltar</button>
          <button className="btn-dark-green" onClick={sendFeedback}>Enviar</button>
        </div>
      </ModalBase>

      <Snackbar
        open={(alertMessage.severity === 'success' || alertMessage.severity === 'error')}
        autoHideDuration={4000}
        onClose={handleCloseAlert}
      >
          <Alert
            severity={alertMessage.severity || 'success'}
            sx={{ width: '100%' }}
            onClose={handleCloseAlert}
          >
            {alertMessage.message}
          </Alert>
        </ Snackbar>
      )
    </>
  );
}