import {
  ResultCard,
  SelectedChoices,
  SelectedChoice,
  ChoiceImage,
  Result,
  ReplyButton,
} from './styledComponent'
import ChoicesContext from '../../context/ChoicesContext'

const GameResultsView = props => {
  const {userChoice, opponentChoice, result, replay} = props

  return (
    <ChoicesContext.Consumer>
      {value => {
        const {choicesList} = value
        const getChoiceImage = choice => {
          const option = choicesList.filter(
            eachOption => choice === eachOption.id,
          )
          return option[0].imageUrl
        }
        const onPlayAgain = () => {
          replay()
        }

        return (
          <ResultCard>
            <SelectedChoices>
              <SelectedChoice>
                <p>YOU</p>
                <ChoiceImage
                  src={getChoiceImage(userChoice)}
                  alt="your choice"
                />
              </SelectedChoice>
              <SelectedChoice>
                <p>OPPONENT</p>
                <ChoiceImage
                  src={getChoiceImage(opponentChoice)}
                  alt="opponent choice"
                />
              </SelectedChoice>
            </SelectedChoices>
            <Result>{result}</Result>
            <ReplyButton type="button" onClick={onPlayAgain}>
              PLAY AGAIN
            </ReplyButton>
          </ResultCard>
        )
      }}
    </ChoicesContext.Consumer>
  )
}
export default GameResultsView
