import React from 'react'
import Person from './components/Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', phone: '040-123456' },
        { name: 'Martti Tienari', phone: '040-123456' },
        { name: 'Arto Järvinen', phone: '040-123456' },
        { name: 'Lea Kutvonen', phone: '040-123456' }
      ],
      newName: '',
      newPhone: '',
      filter: '',
      filteredPersons: []
    }
  }

  handleFilter = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value })

    const newFiltered = this.state.persons.filter(person => person.name.toLowerCase().startsWith(this.state.filter.toLowerCase()))
    
    console.log(newFiltered)
    this.setState({filteredPersons: newFiltered})
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handlePhoneChange = (event) => {
    console.log(event.target.value)
    this.setState({ newPhone: event.target.value })
  }

  addName = (event) => {
    event.preventDefault()

    const noteObject = {
        name: this.state.newName,
        phone: this.state.newPhone
    }
    
    const isSaved = this.state.persons.filter(person => person.name === this.state.newName)
    if (isSaved.length !== 0) {
        alert('Nimi on jo tallennettu luetteloon!')
    } else {
        const persons = this.state.persons.concat(noteObject)
    
        this.setState({
            persons: persons,
            newName: '',
            newPhone: ''
        })   
    }
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>
            rajaa näytettäviä: 
            <form>
                <input value={this.state.filter} onChange={this.handleFilter} />
            </form>
            <p/>
        </div>
        
        <form onSubmit={this.addName}>
          <div>
            nimi: <input
            value={this.state.newName}
            onChange={this.handleNameChange} 
            />
          </div>
          <div>
            numero: <input 
            value={this.state.newPhone}
            onChange={this.handlePhoneChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <table>
            <tbody>
                {this.state.filter !== ''? this.state.filteredPersons.map(person => <Person key={person.name} person={person} />):
                this.state.persons.map(person =>  <Person key={person.name} person={person} />) }
            </tbody>
        </table>
      </div>
    )
  }
}

export default App
