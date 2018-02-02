import React, { Component } from 'react'
import FilterInput from './components/FilterInput'
import Numerot from './components/Numerot'
import AddPerson from './components/AddPerson'

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
        
        <FilterInput filter={this.state.filter} handleFilter={this.handleFilter} />
        
        <AddPerson newName={this.state.newName} handleNameChange={this.handleNameChange}
            newPhone={this.state.newPhone} handlePhoneChange={this.handlePhoneChange}
            addName={this.addName} />

        <Numerot filter={this.state.filter} filteredPersons={this.state.filteredPersons} persons={this.state.persons} />
      </div>
    )
  }
}

export default App
