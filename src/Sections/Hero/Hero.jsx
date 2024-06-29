import style from './HeroStyle.module.css';
import heroImg from '../../assets/Fahad.jpg'
import themeImg from '../../assets/sun.svg'
import themeImgDark from '../../assets/moon.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import twitterIconDark from '../../assets/twitter-dark.svg'
import githubIcon from '../../assets/github-light.svg'
import githubIconDark from '../../assets/github-dark.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import linkedinIconDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useState } from 'react';
function Hero() {
    let [darkTheme , setTheme]=useState(true);
    let setbackColor=()=>{
        setTheme(!darkTheme);
    }
    return (
        <section id='hero' className={`${darkTheme ? style.containerLight :style.container  }`} >
            <div className={style.colorModeContainer} >
                <img className={style.hero} src={heroImg} alt="Profile picture of Fahad Khan" />
                <img onClick={setbackColor} className={style.colorMode} src={darkTheme ? themeImg : themeImgDark } alt="Color Mode Icon" />
            </div>
            <div className={style.info} >
                <h1>Fahad
                    <br/>
                    KhaN
                </h1>
                <h2>
                    Front-End Developer
                </h2>
                <span>
                    <a href="https://twitter.com/" target='_blank'>
                    <img src={darkTheme ? twitterIcon : twitterIconDark} alt="Fahad Khan Twitter Icon Link" />
                    </a>
                    <a href="https://linkedin.com/" target='_blank'>
                    <img src={darkTheme ? linkedinIcon : linkedinIconDark} alt="Fahad Khan Linkedin Icon Link" />
                    </a>
                    <a href="https://Github.com/" target='_blank'>
                    <img src={darkTheme ? githubIcon : githubIconDark} alt="Fahad Khan GitHub Icon Link" />
                    </a>
                </span>
                <p>
                    Love to Develop beautiful React Websites
                </p>
                <a href={CV} download >
                    <button className='hover' >
                        Resume
                    </button>
                </a>
               
            </div>
        </section>
    )
}

export default Hero