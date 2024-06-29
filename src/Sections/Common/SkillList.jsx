function SkillList({src , skill}) {
    return (
        <span>
            <img src={src} alt="Check Mark Icon" />
            <p>{skill}</p>
        </span>
    )
}

export default SkillList