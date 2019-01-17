import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Project = ({
  info: { title, thumbnail, description, link, tags, code_link },
  right,
}) => (
  <ScrollAnimation
    animateIn={right ? 'rotate-in-right' : 'rotate-in-left'}
    animateOnce={true}
  >
    <div className={right ? 'project right' : 'project'}>
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
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Live Project
        </a>
        {code_link ? (
          <a
            href={code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            Project Code
          </a>
        ) : (
          <p className="no-code">Private Repo, code available on request</p>
        )}
      </div>
    </div>
  </ScrollAnimation>
)

export default Project
