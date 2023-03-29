import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 16px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media all and (min-width: 768px) {
    padding: 40px;
  }
`
export const ChoiceList = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const RulesContainer = styled.div`
  margin-left: auto;
`
export const RulesButton = styled.button`
  font-family: 'Bree Serif';
  margin-left: auto;
`
export const RulesPopup = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border: 5px solid #ffffff;
`
export const CloseButton = styled.button`
  align-self: flex-end;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 250px;
  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
`
export const ChoiceButton = styled.button`
  width: 120px;
  background-color: transparent;
  border: 0px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const ChoiceImage = styled.img`
  width: 100%;
`
