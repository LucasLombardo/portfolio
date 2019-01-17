import React from 'react'
import { ScMessageBox } from '../styles/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

const MessageBox = ({ children }) => (
  <ScMessageBox>
    <div className="box">
      {children}
      <Link to="/" className="button">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to Home
      </Link>
    </div>
  </ScMessageBox>
)

export default MessageBox
