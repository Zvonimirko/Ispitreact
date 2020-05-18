import React from 'react'
import UserInfo from './UserInfo.component'
import List from './List.component'
import Input from './Input.component'
import Reset from './Reset.component'

function Form(props) {
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <Input input={props.input} user={props.user} handleInput={props.handleInput}/>
        <UserInfo userInfo={props.userInfo}/>
        <List repos={props.repos}/>
      </form>
      <Reset handleReset={props.handleReset}/>
    </div>
  )
}

export default Form