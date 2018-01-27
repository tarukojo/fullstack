import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const Statistiikka = (props) => {
    return (
        <div>
        <h1>Statistiikka</h1>
        <p>{props.textHyva}: {props.hyva}</p>
        <p>{props.textNeutraali}: {props.neutraali}</p>
        <p>{props.textHuono}: {props.huono}</p>
        </div>
    )
}

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            palauteHyva: 0,
            palauteNeutraali: 0,
            palauteHuono: 0,
            otsikko: "Anna palautetta",
            arvosanaHyva: "hyvä",
            arvosanaNeutraali: "neutraali",
            arvosanaHuono: "huono"
        }
    }  

  klikHyva = (arvo) => () => this.setState({ palauteHyva: arvo })
  klikNeutraali = (arvo) => () => this.setState({ palauteNeutraali: arvo })
  klikHuono = (arvo) => () => this.setState({ palauteHuono: arvo })

  render() {
   return (
      <div>
        <h1>{this.state.otsikko}</h1>
        <Button handleClick={this.klikHyva(this.state.palauteHyva + 1)} text={this.state.arvosanaHyva} />
        <Button handleClick={this.klikNeutraali(this.state.palauteNeutraali + 1)} text={this.state.arvosanaNeutraali} />
        <Button handleClick={this.klikHuono(this.state.palauteHuono + 1)} text={this.state.arvosanaHuono} />
        <Statistiikka hyva={this.state.palauteHyva} neutraali={this.state.palauteNeutraali} huono={this.state.palauteHuono}
            textHyva={this.state.arvosanaHyva} textNeutraali={this.state.arvosanaNeutraali} textHuono={this.state.arvosanaHuono} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)