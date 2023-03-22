import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import ChoicesContext from '../../context/ChoicesContext'

import {
  BgContainer,
  ChoiceList,
  RulesContainer,
  RulesButton,
  RulesPopup,
  CloseButton,
} from './styledComponent'

import ScoreBoard from '../ScoreBoard'
import GameChoiceItem from '../GameChoiceItem'
import GameResultsView from '../GameResultsView'

const choiceValueList = {
  ROCK: 2,
  SCISSORS: 1,
  PAPER: 0,
}

class Game extends Component {
  state = {
    score: 0,
    isPlaying: true,
    choices: ['', ''],
    result: '',
  }

  getUserChoice = (id, choicesList) => {
    const randomChoice = Math.floor(Math.random() * choicesList.length)
    let opponentChoiceId
    switch (randomChoice) {
      case choiceValueList.ROCK:
        opponentChoiceId = 'ROCK'
        break
      case choiceValueList.SCISSORS:
        opponentChoiceId = 'SCISSORS'
        break
      case choiceValueList.PAPER:
        opponentChoiceId = 'PAPER'
        break
      default:
        break
    }
    this.setState(
      {
        isPlaying: false,
        choices: [id, opponentChoiceId],
      },
      this.getResult,
    )
  }

  getResult = () => {
    const {choices} = this.state
    const userChoice = choiceValueList[choices[0]]
    const opponentChoice = choiceValueList[choices[1]]
    if (
      userChoice - opponentChoice === 1 ||
      opponentChoice - userChoice === 2
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (
      opponentChoice - userChoice === 1 ||
      userChoice - opponentChoice === 2
    ) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else {
      this.setState({result: 'IT IS DRAW'})
    }
  }

  replay = () => {
    this.setState({
      isPlaying: true,
      choices: ['', ''],
      result: '',
    })
  }

  render() {
    const {score, isPlaying, choices, result} = this.state
    return (
      <ChoicesContext.Consumer>
        {value => {
          const {choicesList} = value
          return (
            <BgContainer>
              <ScoreBoard score={score} />
              {isPlaying ? (
                <ChoiceList>
                  {choicesList.map(eachChoice => (
                    <GameChoiceItem
                      choiceDetails={eachChoice}
                      key={eachChoice.id}
                      getUserChoice={this.getUserChoice}
                    />
                  ))}
                </ChoiceList>
              ) : (
                <GameResultsView
                  userChoice={choices[0]}
                  opponentChoice={choices[1]}
                  result={result}
                  replay={this.replay}
                />
              )}
              <RulesContainer>
                <Popup
                  modal
                  trigger={<RulesButton type="button">RULES</RulesButton>}
                  position="top right"
                >
                  {close => (
                    <RulesPopup>
                      <CloseButton type="button" onClick={() => close()}>
                        <RiCloseLine />
                      </CloseButton>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                        alt="rules"
                      />
                    </RulesPopup>
                  )}
                </Popup>
              </RulesContainer>
            </BgContainer>
          )
        }}
      </ChoicesContext.Consumer>
    )
  }
}
export default Game
