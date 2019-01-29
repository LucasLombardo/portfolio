import React from 'react'
import { ScAboutCard } from '../styles'
import ScrollAnimation from 'react-animate-on-scroll'

const AboutCard = ({ src, title, content, right, children }) => (
  <ScrollAnimation
    animateIn={right ? 'rotate-in-right' : 'rotate-in-left'}
    animateOnce={true}
  >
    <ScAboutCard className={right ? 'right' : 'left'}>
      <div className="image-wrapper">
        <img src={src} alt={title} />
      </div>
      <div className="content">
        {title && <h3>{title}</h3>}
        {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
        <div className="card-footer">{children}</div>
      </div>
    </ScAboutCard>
  </ScrollAnimation>
)

export default AboutCard
