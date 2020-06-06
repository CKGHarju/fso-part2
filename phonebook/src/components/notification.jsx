import React from 'react'

const bannerStyle = {
  background: 'lightgrey',
  borderStyle: 'solid',
  borderRadius: '5px',
  padding: '10px',
  marginBottom: '10px'
}

const errorStyle = {
  ...bannerStyle,
  color: 'red',
}

const successStyle = {
  ...bannerStyle,
  color: 'green',
}

const Notification = ({error, success}) => {
  if (error) return (
    <div style={errorStyle}>
      {error}
    </div>
  )

  if (success) return (
    <div style={successStyle}>
      {success}
    </div>
  )
  return null;
}

export default Notification
