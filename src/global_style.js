import { createGlobalStyle } from 'styled-components'
import bgDesc from './images/bg-header-desktop.svg'

export default createGlobalStyle`

  :root{
    font-family: 'League Spartan', sans-serif;
    font-size: 16px;

  }

  body {
    margin: 0;
    padding: 0;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    &::after{
      position: absolute;
      content: "";
      width: 100vw;
      height: 100vh;
      top: 0;
      background-image: url(${bgDesc});
      background-reapeat-x: repeat;
      background-repeat-y: no-repeat;
      z-index: -1;
    }
    &:before{
      position: absolute;
      content: "";
      width: 100vw;
      height: 20vh;
      top: 0;
      background-color: hsl(180, 29%, 50%);
      z-index: -1;
  }
}`