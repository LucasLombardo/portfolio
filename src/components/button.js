import React from 'react'
import { ScButton } from '../styles/'

const Button = ({ children, btnType }) => (
  <ScButton className={btnType}>{children}</ScButton>
)

export default Button
