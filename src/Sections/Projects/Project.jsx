import style from './ProjectStyle.module.css';
import viber from '../../assets/viberr.png'
import burger from '../../assets/fresh-burger.png'
import hipster from '../../assets/hipsster.png'
import Fitlift from '../../assets/fitlift.png'
import ProjectCard from '../Common/ProjectCard';
function Project() {
  return (
    <section id='project' className={style.container} >
        <h1 className='sectionTitle' >Projects</h1>
        <div className={style.projectContainer}>
            <ProjectCard h3='viber' p='Streaming App' src={viber} link='href="https:/facebook.com' />
            <ProjectCard h3='Fresh Burger' p='Hamburger Resturant' src={burger} link='href="https:/facebook.com' />
            <ProjectCard h3='Hipsster' p='Glasses Shop' src={hipster} link='href="https:/facebook.com' />
            <ProjectCard h3='Fit Left' p='Gym for YOU' src={Fitlift} link='href="https:/facebook.com' />
        </div>
    </section>
  )
}

export default Project