import styled  from 'styled-components';
import media from "styled-media-query";



export const PanelWrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

export const PanelContainer = styled.div`
  position: relative;
  font-size: 1rem;  
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 1rem;
  border-left: 5px solid hsl(180, 29%, 50%);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;

  @media screen and (max-device-width:780px) {
    display: flex;
    flex-direction: column;
    width: 85vw;
    height: 30vh;
    margin-top: 8rem;
    box-shadow: 15px 15px 40px 0 rgba(0, 0, 0, 0.1);
    border-left: 12px solid hsl(180, 29%, 50%);
    border-radius: 11px;
  }
`;

export const PanelAvatar = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-image: url(${props => props.avatarImg});
  background-position: center;

  @media screen and (max-device-width:780px) {
    height: 140px;
    width: 140px;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: -70px;
    left: 40px;
  }
`

export const PanelInfoRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 60%;
  min-width: 25vw;
  justify-content: space-between;

  @media screen and (max-device-width:780px) {
    padding-top: 4rem;
    font-size: 2rem;
    max-width: 100%;
    height: 15rem;
  }

  @media screen and (max-device-width:580px) {
    font-size: 3rem;
  }
`

export const PanelInfoRow = styled.div`
  height: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${props => props.textColor? props.textColor : 'hsl(180, 29%, 50%)'};
  font-weight: ${props => props.fontWeight? props.fontWeight : 700};

  &:hover {
    cursor: pointer;
    color: ${props => props.hover?  'hsl(180, 29%, 50%)' : props.textColor};
  }

  @media screen and (max-device-width:780px) {
    height: 3.5rem;
    width: 100%;
  }
`

export const PanelTagContainer= styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  justify-content: flex-end;
  max-width: 40vw;
  min-width: 35vw;
  height: 80px;
  flex-wrap: wrap;
  padding: 0 2rem;

  @media screen and (max-device-width:780px) {
    height: 15vh;
    justify-content: space-between;
    max-width: 85%;
  }
  
`

export const TagWrapper = styled.div`
  background-color: hsl(180, 52%, 96%);
  color: hsl(180, 29%, 50%);
  width: fit-content;
  padding: 0.3rem;
  border-radius: 5px;
  margin-left: 0.5rem;
  transition: .3s;
  

  @media screen and (max-device-width:780px) {
    transform: scale(2.8);
    margin-left: 1.5rem;
  }
  

  &:hover {
    cursor: pointer;
    background-color: hsl(180, 29%, 50%);
    color: #fff;
  }
`