import {ChoiceItem, ChoiceButton, ChoiceImage} from './styledComponent'

const GameChoiceItem = props => {
  const {choiceDetails, getUserChoice} = props
  const {id, imageUrl, dataTestId} = choiceDetails
  const onClickOption = () => {
    getUserChoice(id)
  }
  return (
    <ChoiceItem>
      <ChoiceButton data-testid={dataTestId} onClick={onClickOption}>
        <ChoiceImage src={imageUrl} alt={id} />
      </ChoiceButton>
    </ChoiceItem>
  )
}

export default GameChoiceItem
