import React from 'react'
import UserInfo from './UserInfo.component'
import List from './List.component'
import Input from './Input.component'
import Reset from './Reset.component'

function Form(props) {
  if (typeof props.userInfo.login === 'string') {
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <UserInfo userInfo={props.userInfo} display={props.display}/>
        <List repos={props.repos} display={props.display}/>
      </form>
      <Reset handleReset={props.handleReset}/>
    </div>
  )
}
return(
  <div>
    <form onSubmit={props.handleSubmit}>
    <Input input={props.input} user={props.user} handleInput={props.handleInput}/>
    </form>
  </div>
)
}

export default Form