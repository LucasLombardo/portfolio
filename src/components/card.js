import React from 'react'
import { ScCard } from '../styles/'

const Card = ({ src, title, content, thumbnailLeft, children }) => (
  <ScCard className={thumbnailLeft ? 'left' : 'right'}>
    <img src={src} />
    <div className="content">
      {title && <h3>{title}</h3>}
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      <div className="card-footer">{children}</div>
    </div>
  </ScCard>
)

export default Card
