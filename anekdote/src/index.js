import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      next: "Next anecdote",
      maxAmount: 6,
      vote: "Vote",
      pisteet: [0, 0, 0, 0, 0, 0],
      bestAIndex: -1
    }
  }

  changeAnecdote = () => {
    this.setState({
        selected: (Math.floor((Math.random() * this.state.maxAmount)))
    })
  }

  vote = (index) => () => { 
    const kopio = [...this.state.pisteet]
    kopio[index] += 1  
    const maxValue = Math.max(...kopio)
    const selectedIndex = kopio.indexOf(maxValue)
    this.setState({
         pisteet: kopio,
         bestAIndex: selectedIndex
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <Votes votes={this.state.pisteet[this.state.selected]} />
        <Button handleClick={this.changeAnecdote} text={this.state.next} />
        <Button handleClick={this.vote(this.state.selected)} text={this.state.vote} />
        <MostVotes anecdote={this.props.anecdotes[this.state.bestAIndex]} />
      </div>

    )
  }
}

const MostVotes = (props) => {
    return (
        <div>
            <p>Anecdote with most votes:</p>
            <p>{props.anecdote}</p>
        </div>
    )
}

const Votes = (props) => {
    return (
        <div>
            <p>Has {props.votes} votes</p>
        </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)