import React from 'react'
import Footer from './Footer'

const Newspaper = () => {
  return (
  <div className='container__div'>
    <header className='container__header'>
      <p>ISSUE, JUNE</p>
      <p>NEWS</p>
    </header>
    <section className='container__section'>
      <p>NEWSPAPER</p>
    </section>
    <section className='container__section container__section--section'>
      <div className='section__div__left'>
        <p>ET HARUM QUIDEM RERUM FACILIES HSIDHJF JKJEI HDFDHFUERERBF JHFDJ </p>
        <label>16 June 2020</label>
        <span>lorem Lorem Ipsum is simply dummy text of ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</span>
      </div>
      <div className='section__div__left section--right'></div>
    </section>
    <section className='container__section container--section'>
      <div className='section__div__left section--left'></div>
      <div className='section__div__left container--right'>
        <p>ET HARUM QUIDEM RERUMF JHFDJ </p>
        <label>16 June 2020</label>
        <span>lorem Lorem ummy texook. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</span>
      </div>
    </section>
    <section className='section--footer'>
      <Footer/>
      <Footer/>
      <Footer/>
    </section>
  </div>
  )
}

export default Newspaper