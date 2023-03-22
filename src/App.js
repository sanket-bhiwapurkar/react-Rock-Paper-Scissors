import './App.css'
import Game from './components/Game'
import ChoicesContext from './context/ChoicesContext'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    dataTestId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    dataTestId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    dataTestId: 'paperButton',
  },
]

const App = () => (
  <ChoicesContext.Provider value={{choicesList}}>
    <Game />
  </ChoicesContext.Provider>
)

export default App
