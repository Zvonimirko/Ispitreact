import React from 'react';
import './App.css';
import Form from './Components/Form.component'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: '',
      userData: {},
      repos: []
    }
  }

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(`https://api.github.com/users/${this.state.user}`)
    .then(response => response.json())
    .then(data => 
      this.setState({
      userData: data
    })
    )

    fetch(`https://api.github.com/users/${this.state.user}/repos`)
    .then(response => response.json())
    .then(data => {
      if(data.length > 0) {
        this.setState({
          repos: data
        })
      } else {
        alert('Pretraživanje nije uspjelo!')
      }
    }

      
    )

  }

  handleReset = (event) => {
    event.preventDefault()
    this.setState({
      user: '',
      userData: {},
      repos: []
    })
  }

  render() {
    const { userData, repos, user } = this.state
     
    return(
      <div className='App'>
          <Form 
          handleSubmit={this.handleSubmit} 
          handleInput={this.handleInput}
          handleReset={this.handleReset}
          userInfo={userData} 
          repos={repos}
          user={user}
          />
      </div>
    )
  } 
}

export default App;
