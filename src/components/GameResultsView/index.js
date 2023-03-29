import {
  ResultCard,
  SelectedChoices,
  SelectedChoice,
  ChoiceImage,
  Result,
  ReplyButton,
} from './styledComponent'

const GameResultsView = props => {
  const {userChoice, opponentChoice, result, replay, choicesList} = props

  const getChoiceImage = choice => {
    const option = choicesList.filter(eachOption => choice === eachOption.id)
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
          <ChoiceImage src={getChoiceImage(userChoice)} alt="your choice" />
        </SelectedChoice>
        <SelectedChoice>
          <p>OPPONENT</p>
          <ChoiceImage
            as="img"
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
}
export default GameResultsView
