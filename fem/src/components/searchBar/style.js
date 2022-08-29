import styled, { keyframes } from 'styled-components';
import remove from '../../images/icon-remove.svg'

const tagShow = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-10px);
    }
    100%{
      opacity: 1;
      transform: translateY(0);
      }
`;

export const SearchBarWrapper = styled.div`
    margin-top: -20px;
    margin-bottom: 3rem;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
    width: 72vw;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: hsl(180, 29%, 50%);
    border-radius: 15px;
    opacity: ${props => props.showFilter ? 1 : 0};
`


export const SearchBar = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-device-width:780px) {
    height: 15vh;
    
  }
`
export const ClearButton = styled.div`
    padding: 2rem;
    font-size: 1.5rem;

    @media screen and (max-device-width:780px) {
        padding: 1rem;
        font-size: 2.5rem;
    }

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const SearchBarItem = styled.div`
    text-decoration: none;
    position: relative;
    background-color: hsl(180, 52%, 96%);
    color: hsl(180, 29%, 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: min-content;
    height: 28px;
    border-radius: 5px;
    padding: 1px 0px 0 5px;
    margin: 1rem;
    transition: .3s;
    cursor: pointer;
    animation: ${tagShow} 0.5s ease-in-out;

    

@media screen and (max-device-width:780px) {
    display: flex;
    transform: scale(1.5);
    margin-left: 6rem;
    margin-right: 0.5rem;
    margin-top: 3rem;
}

@media screen and (max-device-width:480px) {
    display: flex;
    transform: scale(2);
    margin: 3rem;
    margin-left: 5rem;
    margin-right: 4.5rem;
    
}

@media screen and (max-device-width:380px) {
    display: flex;
    transform: scale(2.2);
    margin: 3rem;
    margin-left: 5.5rem;
    margin-right: 4.5rem;
}
`

export const SearchBarItemClose = styled.div`
    height: 28px;   
    width: 28px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    background-color: hsl(180, 29%, 50%);
    background-image: url(${remove});
    background-repeat: no-repeat;
    background-position: center;
    margin-left: 5px;
    &:hover {
        cursor: pointer;
        background-color: black;
    }
`




