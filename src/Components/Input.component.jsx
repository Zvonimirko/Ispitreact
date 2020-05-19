import React from 'react'
import Button from './Button.component'

function Input(props) {
  return(
    <div>
          <input 
          name='user' 
          type='text' 
          value={props.user} 
          onChange={props.handleInput}
          placeholder='Search info'
          />
          <Button />
    </div>
  )
}

export default Input