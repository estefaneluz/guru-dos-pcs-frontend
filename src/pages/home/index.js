import React, { useState } from 'react'
import './styles.css'
import Header from '../../components/Header'
import Step from '../../components/Step'
import { RangeSlider } from '../../components/RangeSlider'
import ItemCard from '../../components/ItemCard'
import cpuIcon from '../../assets/computer-components/cpu.svg'
import ModalFeedback from '../../components/Modal/ModalFeedback'
import MotalItemDetails from '../../components/Modal/ModaItemDetails'
import DarkButton from '../../components/DarkButton'
import starFeedbackIcon from '../../assets/star-feedback.svg'
import StepPrograms from '../../components/IdentifyUserProfile/StepPrograms'

export default function Home() {
  const [openFeedback, setOpenFeedback] = useState(false)
  const [openItemDetails, setOpenItemDetails] = useState(false)

  const handleModalFeedback = () => setOpenFeedback(!openFeedback)
  const handleModalItens = () => setOpenItemDetails(!openItemDetails)

  return (
    <>
      <Header />
      <StepPrograms />
      <Step
        number="2"
        title="Valor de Investimento"
        description="Qual o valor máximo e mínimo que está disposto a investir?"
        mt="124px"
      />
      <RangeSlider />
      <Step
        number="3"
        title="Match! Conheça o computador"
        description="De acordo com as informações fornecidas, geramos o computador adequado."
        mt="124px"
      />
      <DarkButton 
        className="ml-55-px"
        label="Enviar Feedback"
        icon={starFeedbackIcon}
        click={handleModalFeedback}
      />
      <div className="card-wrapper ml-55-px">
        <ItemCard
          title='Ryzen 3 3200G'
          openModal={handleModalItens}
          icon={cpuIcon}
          type="Processador"
          brand="AMD"
          price="656,00"
          content={[
            {
              label: "Frequência",
              value: "3.2 GHz"
            },
            {
              label: "Socket",
              value: "AM4"
            }
          ]}
        />
        <ItemCard
          title='Ryzen 3 3200G'
          openModal={handleModalItens}
          icon={cpuIcon}
          type="Processador"
          brand="AMD"
          price="656,00"
          content={[
            {
              label: "Frequência",
              value: "3.2 GHz"
            },
            {
              label: "Socket",
              value: "AM4"
            }
          ]}
        />
      </div>
      <MotalItemDetails handleModal={handleModalItens} open={openItemDetails} />
      <ModalFeedback handleModal={handleModalFeedback} open={openFeedback} />
    </>
  )
}
