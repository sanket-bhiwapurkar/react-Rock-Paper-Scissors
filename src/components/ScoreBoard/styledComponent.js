import styled from 'styled-components'

export const ScoreBoardContainer = styled.div`
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 16px;
  font-family: 'Bree Serif';
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const Heading = styled.h1`
  font-size: 18px;
  font-weight: 100;
  margin: 0px;
  @media all and (min-width: 768px) {
    font-size: 30px;
  }
`
export const ScoreCard = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 16px;
  color: #223a5f;
  height: 100%;
  text-align: center;
`

export const ScoreHeading = styled.p`
  margin: 0px;
`
export const Score = styled.p`
  font-size: 35px;
  margin: 0px;
  font-family: 'Roboto';
`
