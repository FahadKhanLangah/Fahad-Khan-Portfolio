import style from './FooterStyle.module.css';
function Footer() {
  return (
    <section id='footer' className={style.Container} >
        <h1 id="footerTitle">
           &copy; Fahad Khan <br />
           All right Reserved
        </h1>
    </section>
  )
}

export default Footer