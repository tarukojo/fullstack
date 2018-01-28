import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    const { handleClick, text } = props
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }

const Statistics = (props) => {
    const {hyva, neutraali, huono, keskiarvo, positiivisia, textHyva, textNeutraali, textHuono, textKeskiarvo, textPositiivisia, kaikkiPalaute} = props
    if (kaikkiPalaute === 0) {
        return (
            <div>
                <p>ei yhtään palautetta annettu</p>
            </div>
        )
    }
    return (
        <div>
        <h1>Statistiikka</h1>
        <table>
            <tbody>
            <Statistic text={textHyva} palaute={hyva} />
            <Statistic text={textNeutraali} palaute={neutraali} />
            <Statistic text={textHuono} palaute={huono} />        
            <Statistic text={textKeskiarvo} palaute={keskiarvo} />
            <Statistic text={textPositiivisia} palaute={positiivisia} />
            </tbody>
        </table>
        </div>
    )
}

const Statistic = (props) => {
    const {text, palaute} = props
    return (
        <tr>
            <td>{text}:</td><td>{palaute}</td>
        </tr>
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
            arvosanaHuono: "huono",
            textKeskiarvo: "Keskiarvo",
            textPositiivisia: "Positiivisia",
            keskiarvo: 0,
            positiivisia: 0,
            kaikkiPalaute: 0
        }
    }  


   klikPalaute = (palauteTyyppi) => () => {
      if (palauteTyyppi === this.state.arvosanaHyva) {
        console.log("Palaute hyvää")
        this.setState({
            palauteHyva: this.state.palauteHyva + 1,
            kaikkiPalaute: this.state.kaikkiPalaute + 1,
            positiivisia: ((this.state.palauteHyva +1) / (this.state.kaikkiPalaute + 1) * 100),
            keskiarvo: ((this.state.palauteHyva + 1) - (this.state.palauteHuono)) / (this.state.kaikkiPalaute + 1)
          })
      }
      else if (palauteTyyppi === this.state.arvosanaNeutraali) {
        console.log("palaute neutraalia")
        this.setState({
            palauteNeutraali: this.state.palauteNeutraali + 1,
            kaikkiPalaute: this.state.kaikkiPalaute + 1,
            positiivisia: (this.state.palauteHyva / (this.state.kaikkiPalaute + 1) * 100),
            keskiarvo: (this.state.palauteHyva - this.state.palauteHuono) / (this.state.kaikkiPalaute + 1)
        })
      }
      else if (palauteTyyppi === this.state.arvosanaHuono) {
        console.log("Palaute huonoa")
        this.setState({
            palauteHuono: this.state.palauteHuono + 1,
            kaikkiPalaute: this.state.kaikkiPalaute + 1,
            positiivisia: (this.state.palauteHyva / (this.state.kaikkiPalaute + 1) * 100),
            keskiarvo: (this.state.palauteHyva - (this.state.palauteHuono +1)) / (this.state.kaikkiPalaute + 1)
        })
      }
      else {
        console.log("Palautetta ei rekisteröity")
      }
  }

  render() {
   return (
      <div>
        <h1>{this.state.otsikko}</h1>
        <Button handleClick={this.klikPalaute(this.state.arvosanaHyva)} text={this.state.arvosanaHyva} />
        <Button handleClick={this.klikPalaute(this.state.arvosanaNeutraali)} text={this.state.arvosanaNeutraali} />
        <Button handleClick={this.klikPalaute(this.state.arvosanaHuono)} text={this.state.arvosanaHuono} />
        <Statistics hyva={this.state.palauteHyva} neutraali={this.state.palauteNeutraali} huono={this.state.palauteHuono}
            textHyva={this.state.arvosanaHyva} textNeutraali={this.state.arvosanaNeutraali} textHuono={this.state.arvosanaHuono} 
            textKeskiarvo={this.state.textKeskiarvo} keskiarvo={this.state.keskiarvo} 
            textPositiivisia={this.state.textPositiivisia} positiivisia={this.state.positiivisia} 
            kaikkiPalaute={this.state.kaikkiPalaute} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)