import React from 'react'
import { ScCard } from '../styles/'
import ScrollAnimation from 'react-animate-on-scroll'

const Card = ({ src, title, content, thumbnailLeft, children }) => (
  <ScrollAnimation animateIn="rotate-in" animateOnce={true}>
    <ScCard className={thumbnailLeft ? 'left' : 'right'}>
      <div className="image-wrapper">
        <img src={src} alt={title} />
      </div>
      <div className="content">
        {title && <h3>{title}</h3>}
        {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
        <div className="card-footer">{children}</div>
      </div>
    </ScCard>
  </ScrollAnimation>
)

export default Card
