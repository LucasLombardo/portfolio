import React from 'react'

const Skill = ({ desc, thumb, title }) => (
  <div>
    <img src={thumb} alt={title} />
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
)

export default Skill
