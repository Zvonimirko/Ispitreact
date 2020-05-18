import React from 'react'
import ListItem from './ListItem.component'

function List(props) { 

  return(
    <div>
        <h2>Repos:</h2>
        <ol>
            {props.repos.length > 0 ? props.repos.map(item => (<ListItem key={item.id} name={item.name}/>)) : ''}
        </ol>
    </div>
  )
}

export default List