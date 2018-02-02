import React from 'react'
import Person from './components/Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  addName = (event) => {
    event.preventDefault()
    const noteObject = {
      name: this.state.newName
    }
  
    const persons = this.state.persons.concat(noteObject)
  
    this.setState({
      persons: persons,
      newName: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input
            value={this.state.newName}
            onChange={this.handleNameChange} 
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <table>
            <tbody>
                {this.state.persons.map(person => <Person key={person.name} person={person} />)}
            </tbody>
        </table>
      </div>
    )
  }
}

export default App
