import React from 'react'
import Input from './input'
import Header from './header'
export default ({onSubmit, inputs}) => {
  return (
    <form onSubmit={onSubmit}>
      <Header title='Add a new'/>
      {inputs.map(input => <Input
        key={input.name}
        label={input.label}
        name={input.name}
        value={input.value}
        onChange={input.onChange}
      />)}
      <button
        type="submit">
        Add
      </button>
    </form>
  )
}
