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
    margin-bottom: 3rem;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
    width: 101%;
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: hsl(180, 29%, 50%);
    
`
export const SearchBar = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
`
export const ClearButton = styled.div`
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
    width: fit-content;
    height: 28px;
    border-radius: 5px;
    padding: 1px 10px 0 5px;
    margin-left: 2rem;
    margin-right: 0.5rem;
    transition: .3s;
    cursor: pointer;
    animation: ${tagShow} 0.5s ease-in-out;

    &:hover::after {
        cursor: pointer;
        background-color: black;
    }

    &::after {
        position: absolute;
        content: '';
        top: 0;
        right: -24px;
        height: 28px;
        width: 28px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        background-color: hsl(180, 29%, 50%);
        background-image: url(${remove});
        background-repeat: no-repeat;
        background-position: center;

      
    }
`




