import './styles.css'
import React, { useContext } from 'react'
import ModalBase from '../index'
import processadorImg from '../../../assets/processador.png'

import { ModalStatesContext } from '../../../contexts/ModalStatesContext'

export default function ModalItemDetails() {
  const { handleModalItens, openItemDetails } = useContext(ModalStatesContext);

  return (
    <>
      <ModalBase handleModal={handleModalItens} open={openItemDetails} className="column">
        <h3>Detalhes do Componente</h3>
        <div>
          <div className="row">
            <div className="item-img-container"> 
              <img src={processadorImg} alt="Imagem do componetne"/>
              <div className="modal-item-price">R$ 649,90</div>
            </div>

            <div className="column">
              <div className="item-description">
                <h4 className="item-title">Ryzen 3 3200G</h4>
                <div className="tag-container">
                  <p className="tag --blue">Processador</p>
                  <p className="tag --green">AMD</p>
                </div>
              </div>
              <ul className="item-details">
                <li><span>Frequência: </span>3.2GHz - 4.5GHz</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row space-between">
          <button className="btn-transparent" onClick={handleModalItens}>Voltar</button>
          <button className="btn-dark-green">Ir à loja</button>
        </div>
      </ModalBase>
    </>
  );
}