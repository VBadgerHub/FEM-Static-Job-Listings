import styled from 'styled-components';

export const CompanyButton = styled.div`
    background-color: ${props => props.background};
    width: fit-content;
    margin-left: 10px;
    margin-right: -2px;
    border-radius: 50px;
    color: white;
    font-weight: 500;
    padding-top: 5px;
    padding-bottom: 2px;
    padding-left: 8px;
    padding-right: 8px;

    @media screen and (max-device-width:780px) {
    padding: .8rem 1.5rem .5rem 1.5rem;
    text-transform: uppercase;
    font-size: 2.5rem;
  }
`;