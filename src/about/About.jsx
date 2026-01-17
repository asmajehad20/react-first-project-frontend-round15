import React from 'react'
import style from './About.module.css'

export default function About() {
    console.log(style);
  return (
    <section className={style.about}>
      <h2 className={style.title}>About</h2>

      <div className={style.content}>
        <p className={style.paragraph}>
          Freelancer is a free Bootstrap theme created by Start Bootstrap. 
          The download includes the complete source files including HTML, CSS, and JavaScript 
          as well as optional SASS stylesheets for easy customization.
        </p>

        <p className={style.paragraph}>
          You can create your own custom avatar for the masthead, change the icon in the dividers, 
          and add your email address to the contact form to make it fully functional!
        </p>
      </div>
      <a href="#" className={style.downloadButton}>
        <i className="bi bi-download"></i> Free Download
      </a>
    </section>
  )
}
