import React from 'react'
import Footer from './Footer'

const Newspaper = () => {
  return (
  <div className='container'>
    {/* Header Section */}
    <header className='header'>
      <p>ISSUE, JUNE</p>
      <p>NEWS</p>
    </header>
    {/* Body Section */}
    <section className='heading'>
      <p>NEWSPAPER</p>
    </section>
    <section className='article article--section1'>
      <div className='article__content'>
        <p>ET HARUM QUIDEM RERUM FACILIES HSIDHJF JKJEI HDFDHFUERERBF JHFDJ </p>
        <label>16 June 2020</label>
        <span>lorem Lorem Ipsum is simply dummy text of ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</span>
      </div>
      <div className='article__content article--contentRight'></div>
    </section>
    <section className='article article--section2'>
      <div className='article__leftDiv article--left'></div>
      <div className='article__leftDiv article--right'>
        <p>ET HARUM QUIDEM RERUMF JHFDJ </p>
        <label>16 June 2020</label>
        <span>lorem Lorem ummy has survived not only five centuries, but als It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</span>
      </div>
    </section>
    {/* footer section */}
    <section className='footer'>
      <Footer/>
      <Footer/>
      <Footer/>
    </section>
  </div>
  )
}

export default Newspaper