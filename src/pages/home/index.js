import React, { useState } from 'react'
import './styles.css'
import Header from '../../components/Header'
import Step from '../../components/Step'
import ButtonMenu from '../../components/ButtonMenu'
import data from '../../components/ButtonMenu/mock.json'
import { RangeSlider } from '../../components/RangeSlider'
import { ProfileContent } from '../../components/ProfileContent'
import { ProgramsButton } from '../../components/ProgramsButton'
import ItemCard from '../../components/ItemCard'
import cpuIcon from '../../assets/computer-components/cpu.svg'

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(-1)

  const handleClicked = (id) => {
    setToggleMenu(id)
  }

  return (
    <>
      <Header />
      <Step
        number="1"
        mt="246px"
        mb="40px"
        title="Diagnosticar Perfil"
        description="Quais programas você usa ou pretende utilizar?"
        helpText="Se o programa não estiver na lista, selecione um similiar."
      />
      <div className="button_wrapper">
        {data.map((item, id) => {
          return (
            <ButtonMenu 
              key={id} 
              title={item.name}
              click={() => handleClicked(id)}
              classAtivated={toggleMenu === id ? '--activated' : ''}
            />
          )
        })}
      </div>
      {(toggleMenu !== -1) && <ProfileContent />}
      {(toggleMenu !== -1) && (
        <div className="programs-button-wrapper">
          <ProgramsButton
            title="Visual Studio Code"
            performance="low"
          />
          <ProgramsButton
            title="Android Studio"
            performance="high"
          />
          <ProgramsButton
            title="Eclipse"
            performance="high"
          />
          <ProgramsButton
            title="Jupyter"
            performance="medium"
          />
          <ProgramsButton
            title="WebStorm"
            performance="low"
          />
        </div>
      )}
      <Step
        number="2"
        title="Valor de Investimento"
        description="Qual o valor máximo e mínimo que está disposto a investir?"
        mt="124px"
      />
      <RangeSlider />
      <ItemCard title='Ryzen 3 3200G' icon={cpuIcon} type="Processador" brand="AMD"/>
    </>
  )
}
