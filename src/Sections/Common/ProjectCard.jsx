
function ProjectCard({src,link ,h3 ,p}) {
  return (
    <a link-={link} target='_blank'>
            <img src={src} alt="viber img" />
            <h3>{h3}</h3>
            <p>{p}</p>
            </a>
  )
}

export default ProjectCard