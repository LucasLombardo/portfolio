import React from 'react'
import Button from './button'

const Project = ({
  info: { title, thumbnail, description, link, tags, code_link },
}) => (
  <div className="project">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={thumbnail} alt={title} />
    </a>
    <div className="project-info">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
      </a>
      <p className="description">{description}</p>
      <p className="tags">
        {tags.split(',').map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button>View Live Project</Button>
      </a>
      <a href={code_link} target="_blank" rel="noopener noreferrer">
        <Button btnType="secondary">View Project Code</Button>
      </a>
    </div>
  </div>
)

export default Project
