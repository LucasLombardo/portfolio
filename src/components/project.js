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
      <p className="tags">
        {tags.split(',').map(tag => (
          <li key={tag}>
            <span>{tag}</span>
          </li>
        ))}
      </p>
      <p className="description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button>Live Project</Button>
      </a>
      {code_link ? (
        <a href={code_link} target="_blank" rel="noopener noreferrer">
          <Button btnType="secondary">Project Code</Button>
        </a>
      ) : (
        <p className="no-code">Private Repo, code available on request</p>
      )}
    </div>
  </div>
)

export default Project
