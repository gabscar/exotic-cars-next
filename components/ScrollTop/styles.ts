import styled from 'styled-components';


export const TopBtn = styled.button<{display:string}>`
    display: ${({display})=> display}; 
    position: fixed; 
    bottom: 20px; 
    right: 110px; 
    z-index: 99; 
    border: none; 
    outline: none; 
    background-color: #E6D3F1; 
    
    width: 73px;
    height: 73px;
    color: white; 
    cursor: pointer; 
    justify-content: center;
    align-items: center;
    padding: 15px; 
    border-radius: 40px; 
    font-size: 18px; 
    &:hover{
        background-color: #555;
    }
    @media (max-width:1200px){
        width: 53px;
        height: 53px;
    }
    @media (max-width:900px){
        right: 40px; 
    }
    @media (max-width:500px){
        right: 10px; 
    }
`