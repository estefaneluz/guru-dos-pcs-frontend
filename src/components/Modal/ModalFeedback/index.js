import './styles.css'
import React, { useState } from 'react'
import ModalBase from '../index'
import FeedbackQuestion from './FeedbackQuestion'

export default function ModalFeedback({handleModal, open}) {
  const [howEasyToGenerate, setHowEasyToGenerate] = useState(0);
  const [serviceSatisfaction, setServiceSatisfaction] = useState(0);
  const [howEasyToUnderstand, setHowEasyToUnderstand] = useState(0);

  return (
    <>
      <ModalBase handleModal={handleModal} open={open} className="column">
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
        <textarea  placeholder="Campo livre para escrever alguma sugestão de melhoria." />
        <div className="row space-between">
          <button className="btn-transparent" onClick={handleModal}>Voltar</button>
          <button className="btn-dark-green">Ir à loja</button>
        </div>
      </ModalBase>
    </>
  );
}