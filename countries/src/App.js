import React from 'react'
import axios from 'axios'
import CountryDetails from './components/CountryDetails'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        countries: [],
        filterName: '',
        filteredCountries: [],
        amount: 0
      }
    }
  
    componentWillMount() {
      console.log('will mount')
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          console.log('promise fulfilled')
          this.setState({countries: response.data})
        })
    }

    handleFilter = (event) => {
        console.log(event.target.value)
        if (event.target.value !== '') {
            const newFiltered = this.state.countries.filter(country => country.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
        
            this.setState({ 
                filterName: event.target.value,
                filteredCountries: newFiltered,
                amount: newFiltered.length
            })
        } 
        if (event.target.value === '') {
            this.setState({
                filterName: '',
                filteredCountries: [],
                amount: 0
            })
        }
    }

     handleFilterByName = (event) => {
        console.log(event)
        const newFiltered = this.state.countries.filter(country => country.name.toLowerCase().startsWith(event.toLowerCase()))
        this.setState({ 
            filterName: event,
            filteredCountries: newFiltered,
            amount: newFiltered.length
        })
    }  

    render() {
        return (
          <div>
            <h2>Countries</h2>
            <div>
                Find countries: <input value={this.state.filterName} onChange={this.handleFilter} />
                <p/>
            </div>
                <CountryDetails amount={this.state.amount} countries={this.state.filteredCountries} handleFilterByName={this.handleFilterByName} />
          </div>
        )
      }
    }
    
    export default App