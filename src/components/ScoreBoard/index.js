import {
  ScoreBoardContainer,
  Heading,
  ScoreCard,
  ScoreHeading,
  Score,
} from './styledComponent'

const ScoreBoard = props => {
  const {score} = props
  return (
    <ScoreBoardContainer>
      <Heading>
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
      </Heading>
      <ScoreCard>
        <ScoreHeading>Score</ScoreHeading>
        <Score>{score}</Score>
      </ScoreCard>
    </ScoreBoardContainer>
  )
}
export default ScoreBoard
