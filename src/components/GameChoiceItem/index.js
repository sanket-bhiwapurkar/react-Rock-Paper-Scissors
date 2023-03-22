import {ChoiceItem, ChoiceButton, ChoiceImage} from './styledComponent'
import ChoicesContext from '../../context/ChoicesContext'

const GameChoiceItem = props => (
  <ChoicesContext.Consumer>
    {value => {
      const {choicesList} = value
      const {choiceDetails, getUserChoice} = props
      const {id, imageUrl, dataTestId} = choiceDetails
      const onClickOption = () => {
        getUserChoice(id, choicesList)
      }
      return (
        <ChoiceItem>
          <ChoiceButton data-testid={dataTestId} onClick={onClickOption}>
            <ChoiceImage src={imageUrl} alt={id} />
          </ChoiceButton>
        </ChoiceItem>
      )
    }}
  </ChoicesContext.Consumer>
)

export default GameChoiceItem
