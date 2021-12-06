import './styles.css'
import React from 'react'
import ModalBase from '../index'
import starFilledIcon from '../../../assets/star-filled.svg'
import starBorder from '../../../assets/star-border.svg'

export default function ModalFeedback({handleModal, open}) {
  return (
    <>
      <ModalBase handleModal={handleModal} open={open} className="column">
        <h3>Feedback</h3>
        <div className="modal-question-wrapper">
          <div className="modal-feedback-question">
            <p>Foi fácil gerar um novo computador?</p>
            <div className="feedback-stars-container">
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 1 ponto." />
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 2 pontos." />
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 3 pontos."/>
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 4 pontos."/>
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 5 pontos." />
            </div>
          </div>
          <div className="modal-feedback-question">
            <p>Qual nota você dá para o computador?</p>
            <div className="feedback-stars-container">
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 1 ponto." />
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 2 pontos." />
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 3 pontos." />
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 4 pontos." />
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 5 pontos." />
            </div>
          </div>
          <div className="modal-feedback-question">
            <p>Foi fácil entender as informações?</p>
            <div className="feedback-stars-container">
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 1 ponto." />
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 2 pontos."/>
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 3 pontos."/>
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 4 pontos."/>
              <img src={starFilledIcon} alt="icone de estrela para feedback. Vale 5 pontos."/>
            </div>
          </div>
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