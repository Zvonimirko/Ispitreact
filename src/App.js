import React from 'react';
import './App.css';
import Button from './Components/Button.component'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: '',
      userData: {},
      userDetails: []
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
    .then(data => 
      this.setState({
      userDetails: data
    })
    )
  }

  handleReset = () => {
    this.setState({
      user: '',
      userData: {},
      userDetails: []
    })
  }


  render() {
    const { userData } = this.state
    console.log(this.state.userDetails)

    const listItems = this.state.userDetails.map(item => <li key={item.id}>{item.name}</li>)

    
    return(
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <input name='user' type='text' value={this.state.user} onChange={this.handleInput}/>
          <Button />
          <hr></hr>
          <img src={userData.avatar_url} alt='Slika profila'/>
          <h1>Ime: {userData.login}</h1>
          <p>ID: {userData.id}</p>
          <p>Lokacija: {userData.location}</p>
          <p>Bio: {userData.bio}</p>
          <ol>
            {listItems}
          </ol>
        </form>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

export default App;
