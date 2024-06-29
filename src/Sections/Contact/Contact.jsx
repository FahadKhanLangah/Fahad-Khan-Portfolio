import style from './ContactStyle.module.css'

function Contact() {
  return (
    <section id='contact' className={style.container} >
        <h1 className="sectionTitle">
            Contact Info
        </h1>
        <div className="formGroup">
            <label htmlFor="name" hidden>Name</label>
            <input type="text" placeholder='Name' name='name' required />
        </div>
        <div className="formGroup">
            <label htmlFor="email" hidden>Email</label>
            <input type="email" placeholder='Email' name='email' required />
        </div>
        <div className="formGroup">
            <label htmlFor="message" hidden>Message</label>
            <textarea type="text" placeholder='Message' name='message' defaultValue={'hello'} />
        </div>
        <div className="formGroup">
        <input type="submit" className='hover btn' value='Submit' />
        </div>
    </section>
  )
}

export default Contact