import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const Statistics = (props) => {
    const {hyva, neutraali, huono, keskiarvo, positiivisia, textHyva, textNeutraali, textHuono, textKeskiarvo, textPositiivisia} = props
    return (
        <div>
        <h1>Statistiikka</h1>
        <Statistic text={textHyva} palaute={hyva} />
        <Statistic text={textNeutraali} palaute={neutraali} />
        <Statistic text={textHuono} palaute={huono} />        
        <Statistic text={textKeskiarvo} palaute={keskiarvo} />
        <Statistic text={textPositiivisia} palaute={positiivisia} />
        </div>
    )
}

const Statistic = (props) => {
    const {text, palaute} = props
    return (
        <div>
            <p>{text}: {palaute}</p>
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
            arvosanaHuono: "huono",
            textKeskiarvo: "Keskiarvo",
            textPositiivisia: "Positiivisia",
            keskiarvo: 0,
            positiivisia: 0,
            kaikkiPalaute: 0
        }
    }  

  klikHyva = () => {
    this.setState({
      palauteHyva: this.state.palauteHyva + 1,
      kaikkiPalaute: this.state.kaikkiPalaute + 1,
      positiivisia: ((this.state.palauteHyva +1) / (this.state.kaikkiPalaute + 1) * 100),
      keskiarvo: ((this.state.palauteHyva + 1) - (this.state.palauteHuono)) / (this.state.kaikkiPalaute + 1)
    })
  }

  klikNeutraali = () => {
      this.setState({
          palauteNeutraali: this.state.palauteNeutraali + 1,
          kaikkiPalaute: this.state.kaikkiPalaute + 1,
          positiivisia: (this.state.palauteHyva / (this.state.kaikkiPalaute + 1) * 100),
          keskiarvo: (this.state.palauteHyva - this.state.palauteHuono) / (this.state.kaikkiPalaute + 1)
      })
  }

  klikHuono = () => {
    this.setState({
        palauteHuono: this.state.palauteHuono + 1,
        kaikkiPalaute: this.state.kaikkiPalaute + 1,
        positiivisia: (this.state.palauteHyva / (this.state.kaikkiPalaute + 1) * 100),
        keskiarvo: (this.state.palauteHyva - (this.state.palauteHuono +1)) / (this.state.kaikkiPalaute + 1)
    })
  }

  render() {
   return (
      <div>
        <h1>{this.state.otsikko}</h1>
        <Button handleClick={this.klikHyva} text={this.state.arvosanaHyva} />
        <Button handleClick={this.klikNeutraali} text={this.state.arvosanaNeutraali} />
        <Button handleClick={this.klikHuono} text={this.state.arvosanaHuono} />
        <Statistics hyva={this.state.palauteHyva} neutraali={this.state.palauteNeutraali} huono={this.state.palauteHuono}
            textHyva={this.state.arvosanaHyva} textNeutraali={this.state.arvosanaNeutraali} textHuono={this.state.arvosanaHuono} 
            textKeskiarvo={this.state.textKeskiarvo} keskiarvo={this.state.keskiarvo} 
            textPositiivisia={this.state.textPositiivisia} positiivisia={this.state.positiivisia} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)