import React from 'react'
import FilterInput from './components/FilterInput'
import Numerot from './components/Numerot'
import AddPerson from './components/AddPerson'
import personService from './services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newPhone: '',
      filter: '',
      filteredPersons: []
    }
  }

  componentWillMount() {
    console.log('will mount')
    personService
    .getAll()
    .then(persons => {
      this.setState({persons})
    })
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
        personService
        .create(noteObject)
        .then(newPerson => {
          this.setState({
            persons: this.state.persons.concat(newPerson),
            newName: '',
            newPhone: ''   
          })        
        })
    }
  }

  deletePerson = (event) => { 
    let personid = event
    console.log(personid)
    const deletedPerson = this.state.persons.find(n => n.id === personid)
    personService
    .deletePerson(personid)
    .then(status => {
      var array = this.state.persons.filter(function(item) {
        return item.id !== deletedPerson.id
      });
      this.setState({
        persons: array
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        
        <FilterInput filter={this.state.filter} handleFilter={this.handleFilter} />
        
        <AddPerson newName={this.state.newName} handleNameChange={this.handleNameChange}
            newPhone={this.state.newPhone} handlePhoneChange={this.handlePhoneChange}
            addName={this.addName} />

        <Numerot filter={this.state.filter} filteredPersons={this.state.filteredPersons} persons={this.state.persons} 
          deletePerson={this.deletePerson} />
      </div>
    )
  }
}

export default App
