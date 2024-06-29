import style from './SkillStyle.module.css';
import CheckMarkIcon from '../../assets/checkmark-light.svg'
import SkillList from '../Common/SkillList';
function Skills() {
  return (
    <section id='skill' className={style.container} >
        <h1>Skills</h1>
        <div className={style.skillList}>
        <SkillList src={CheckMarkIcon} skill='HTML' />
        <SkillList src={CheckMarkIcon} skill='CSS' />
        <SkillList src={CheckMarkIcon} skill='JavaScript' />
        <SkillList src={CheckMarkIcon} skill='React' />
        </div>
        <hr/>
        <div className={style.skillList}>
        <SkillList src={CheckMarkIcon} skill='BootStrap'/>
        <SkillList src={CheckMarkIcon} skill='MySql Database'/>
        <SkillList src={CheckMarkIcon} skill='Java OOP' />
        </div>
    </section>
  )
}

export default Skills