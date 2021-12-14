import './styles.css'
import React, { useContext } from 'react'
import ModalBase from '../index'
import maskCurrencyBRL from '../../../functions/maskCurrencyBRL'

import { ModalStatesContext } from '../../../contexts/ModalStatesContext'

export default function ModalItemDetails() {
  const { 
    handleModalItens, 
    openItemDetails, 
    selectedComponent: component 
  } = useContext(ModalStatesContext);

  return (
    <>
      <ModalBase handleModal={handleModalItens} open={openItemDetails} className="column">
        <h3>Detalhes do Componente</h3>
        {!!component.componente && 
        <>
          <div>
            <div className="row">
              <div className="item-img-container"> 
                <img src={component.image} alt={`Imagem do ${component.componente} ${component.nome}`}/>
                <div className="modal-item-price">{maskCurrencyBRL(component.preco)}</div>
              </div>

              <div className="column">
                <div className="item-description">
                  <h4 className="item-title">{component.nome}</h4>
                  <div className="tag-container">
                    <p className="tag --blue">{component.componente}</p>
                    <p className="tag --green">{component.marca}</p>
                  </div>
                </div>
                <ul className="item-details">
                  {component.content.map(c => {
                    return <li><span>{c.label}: </span>{c.value}</li>
                  })
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className="row space-between">
            <button className="btn-transparent" onClick={handleModalItens}>Voltar</button>
            <button className="btn-dark-green">Ir à loja</button>
          </div>
        </>}
      </ModalBase>
    </>
  );
}