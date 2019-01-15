import React from 'react'
import { ScMessageBox } from '../styles/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import Button from '../components/button'

const MessageBox = ({ children }) => (
  <ScMessageBox>
    <div className="box">
      {children}
      <Link to="/">
        <Button>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Home
        </Button>
      </Link>
    </div>
  </ScMessageBox>
)

export default MessageBox
