import React from 'react'
import ModalBase from '../index'

export default function ModalAlert({handleModal, open}) {

  return (
    <>
      <ModalBase handleModal={handleModal} open={open}>
        <p> Selecione ao menos um programa para continuar. </p>
        <button className='btn --confirm' onClick={handleModal}>Ok</button>
      </ModalBase>
    </>
  );
}