import React from 'react'

export default ({label, name, value, onChange}) => {
  const styles = {
    label: { display: 'block' }
  }

  return (
    <label htmlFor={name} style={styles.label}>
      {label || name}: <input type='text' id={name} value={value} onChange={e => onChange(e.target.value)}/>
    </label>
  )
}
