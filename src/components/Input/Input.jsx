import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = ({
  type = 'text',
  placeholder = 'insert the text',
  InputRef = null,
  handleChange = () => {},
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input heading heading_3"
      ref={InputRef}
      onChange={(e) => handleChange(e.target.value)}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Input
