import React, { useState } from 'react'
import { questions } from './api'
import './Accordion.css'
import Myaccordion from './Myaccordion'


const Accordion = () => {
  const [data, setData] = useState(questions)

  return (
    <>
      <section className='main-div'>
        <h1>React Interview Questions Answers</h1>

        <div >
          {
            data.map((curElem) => {
              const { id } = curElem;
              return <Myaccordion key={id} {...curElem} />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Accordion