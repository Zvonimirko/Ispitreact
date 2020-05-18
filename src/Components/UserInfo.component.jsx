import React from 'react'

function UserInfo(props) {

  return(
    <div>
          <hr></hr>
          <img src={props.userInfo.avatar_url} alt='Slika profila'/>
          <h1>Ime: {props.userInfo.login}</h1>
          <p>ID: {props.userInfo.id}</p>
          <p>Lokacija: {props.userInfo.location}</p>
          <p>Bio: {props.userInfo.bio}</p>
    </div>
  )
}

export default UserInfo