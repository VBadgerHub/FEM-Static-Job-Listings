import styled  from 'styled-components';




export const PanelWrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PanelContainer = styled.div`
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
`

export const PanelAvatar = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-image: url(${props => props.avatarImg});
`

export const PanelInfoRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30vw;
  justify-content: space-between;
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
`

export const PanelTagContainer= styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  justify-content: flex-end;
  width: 40vw;
  height: 80px;
`

export const TagWrapper = styled.div`
  background-color: hsl(180, 52%, 96%);
  color: hsl(180, 29%, 50%);
  width: fit-content;
  padding: 0.3rem;
  border-radius: 5px;
  margin-left: 0.5rem;
  transition: .3s;

  

  &:hover {
    cursor: pointer;
    background-color: hsl(180, 29%, 50%);
    color: #fff;
  }
`