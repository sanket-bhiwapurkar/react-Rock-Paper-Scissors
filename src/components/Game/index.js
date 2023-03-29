import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import {
  BgContainer,
  RulesContainer,
  RulesButton,
  RulesPopup,
  ButtonContainer,
  CloseButton,
  ChoiceButton,
  ChoiceImage,
} from './styledComponent'

import ScoreBoard from '../ScoreBoard'
// import GameChoiceItem from '../GameChoiceItem'
import GameResultsView from '../GameResultsView'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const choiceValueList = {
  ROCK: 2,
  SCISSORS: 1,
  PAPER: 0,
}

class Game extends Component {
  state = {
    score: 0,
    isPlaying: true,
    choices: ['ROCK', 'SCISSORS'],
    result: 'YOU WON',
  }

  getUserChoice = id => {
    const opponentChoiceId =
      choicesList[Math.floor(Math.random() * choicesList.length)].id
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
      choices: ['ROCK', 'SCISSORS'],
      result: 'YOU WON',
    })
  }

  render() {
    const {score, isPlaying, choices, result} = this.state
    return (
      <BgContainer>
        <ScoreBoard score={score} />
        {isPlaying ? (
          <ButtonContainer>
            <ChoiceButton
              data-testid="rockButton"
              onClick={() => this.getUserChoice(choicesList[0].id)}
            >
              <ChoiceImage
                src={choicesList[0].imageUrl}
                alt={choicesList[0].id}
              />
            </ChoiceButton>
            <ChoiceButton
              data-testid="scissorsButton"
              onClick={() => this.getUserChoice(choicesList[1].id)}
            >
              <ChoiceImage
                src={choicesList[1].imageUrl}
                alt={choicesList[1].id}
              />
            </ChoiceButton>
            <ChoiceButton
              data-testid="paperButton"
              onClick={() => this.getUserChoice(choicesList[2].id)}
            >
              <ChoiceImage
                src={choicesList[2].imageUrl}
                alt={choicesList[2].id}
              />
            </ChoiceButton>
          </ButtonContainer>
        ) : (
          <GameResultsView
            userChoice={choices[0]}
            opponentChoice={choices[1]}
            choicesList={choicesList}
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
  }
}
export default Game
